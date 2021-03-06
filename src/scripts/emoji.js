// https://home.unicode.org/
// https://www.unicode.org/reports/tr51/
// http://www.unicode.org/emoji/charts/emoji-list.html

const csvParse = require('csv-parse/lib/sync');
const axios = require('axios');
const jsesc = require('jsesc');
const he = require('he');

const dumpEmoji = () => {
    return axios.get('https://www.unicode.org/Public/emoji/latest/emoji-test.txt')
        .then((response) => response.data)
        .then((csv) => csvParse(`unicode;qualification\n${csv}`, {
            delimiter: ';',
            comment: '#',
            trim: true,
            skip_lines_with_error: true
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
}

module.exports = {
    dumpEmoji
}