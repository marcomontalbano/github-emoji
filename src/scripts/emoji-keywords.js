const axios = require('axios');
const htmlMiner = require('html-miner');

const fetchEmojiKeywords = (async () => {

    const html = await axios.get('https://www.unicode.org/emoji/charts/emoji-list.html').then(response => response.data)

    return htmlMiner(html, (arg) => {
        return Object.fromEntries(Array.from(arg.$('table tr th.bighead').closest('tr'))
            .reduce((acc, categoryTag, index, list) => {
                const category = arg.$(categoryTag).text()
                const emojisByCategory = Array.from(arg.$(categoryTag).nextUntil(list[index + 1])).filter(nextTr => arg.$(nextTr).find('td').length === 5)

                return [
                    ...acc,
                    ...emojisByCategory.map(tr => {
                        const code = arg.$(tr).children().eq(1).text();
                        const keywords = Array.from(new Set(`${arg.$(tr).children().eq(3).text()} | ${arg.$(tr).children().eq(4).text()}`.split(' | ')));
                        return [code, { category, keywords }];
                    })
                ]
            }, [])
        )
    })
});

module.exports = {
    fetchEmojiKeywords
}