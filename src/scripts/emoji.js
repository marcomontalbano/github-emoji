// https://home.unicode.org/
// https://www.unicode.org/reports/tr51/
// http://www.unicode.org/emoji/charts/emoji-list.html

const { parse } = require('csv-parse/sync');
const axios = require('axios');
const jsesc = require('jsesc');
const he = require('he');

const { fetchEmojiKeywords } = require('./emoji-keywords.js')

const dumpEmoji = () => {
    return axios.get('https://www.unicode.org/Public/emoji/latest/emoji-test.txt')
        .then((response) => response.data)
        // .then((csv) => { console.log('csv', csv); return csv; })
        .then((csv) => parse(`unicode;qualification\n${csv}`, {
            delimiter: ';',
            comment: '#',
            trim: true,
            skip_empty_lines: true
        }))
        .then((items) => items.filter(([, qualification]) => qualification === 'fully-qualified'))
        .then((items) => {
            return items.reduce((acc, [unicode]) => {
                const sanitized = unicode.replace(/\b200D\b|\bFE0F\b/g, '').replace(/[\s]+/g, ' ').trim()
                acc[sanitized] = unicode;
                return acc;
            }, {})
        })
        .then(async (items) => {
            const ghEmojiResponse = await axios.get('https://api.github.com/emojis');

            const ghEmojis = Object.entries(ghEmojiResponse.data);

            const getUnicode = (unicode) => `U+${unicode.toUpperCase()}`;
            const getDecimal = (unicode) => parseInt(unicode, 16);
            const getHTMLEntity = (unicode) => `&#${getDecimal(unicode)};`;
            const getEmoji = (unicode) => he.decode(getHTMLEntity(unicode));
            const getEscapedUnicode = (unicode) => jsesc(getEmoji(unicode), { es6: false }).replace(/\x([A-Z0-9]{2})/g, (match, p1) => `\\u00${p1}`)

            const transformUnicode = (unicode, method) => unicode.split(' ').map(method).join('');

            const emojis = ghEmojis.map(([name, image]) => {
                const unicodeString = (image.match(/\/([0-9a-z-]+).png/) || [])[1];
                const unicode = unicodeString.replace(/-/g, ' ').toUpperCase();
                const isEmoji = items[unicode] ? true : false;
                const ghcode = `:${name}:`;

                return [
                    name,
                    {
                        ghcode,
                        image,
                        valid: isEmoji,
                        ...isEmoji ? {
                            unicode: transformUnicode(items[unicode], getUnicode).replace(/U\+/g, ' U+').replace(/^ U\+/, 'U+'),
                            emoji: transformUnicode(items[unicode], getEmoji),
                            escaped: transformUnicode(items[unicode], getEscapedUnicode).toLowerCase(),
                            html: transformUnicode(items[unicode], getHTMLEntity),
                        } : {}
                    }
                ]
            });

            return Object.fromEntries(emojis);
        })
        .then(async (emojis) => {
            const keywords = await fetchEmojiKeywords();

            const emojisEntries = Object.entries(emojis);

            const emojisEntriesWithKeywords = emojisEntries.map(([key, value]) => {
                const perfectMatch = Object.entries(keywords).find(([code]) => value.unicode === code) || []
                const [, emojiKeywords] = perfectMatch.length ? perfectMatch : Object.entries(keywords).find(([code]) => value.unicode?.includes(code)) || []

                return ([key, {
                    ...value,
                    ...emojiKeywords
                }])
            })

            return Object.fromEntries(emojisEntriesWithKeywords);
        })
}

module.exports = {
    dumpEmoji
}