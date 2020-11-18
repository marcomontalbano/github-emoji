const axios = require('axios');
const htmlMiner = require('html-miner');

const fs = require('fs');
const path = require('path');

(async () => {

    const html = await axios.get('https://www.unicode.org/emoji/charts/emoji-list.html').then(response => response.data)
        // .then(html => fs.writeFileSync(path.resolve(__dirname, 'emoji.html'), html));

    // const html = fs.readFileSync(path.resolve(__dirname, 'emoji.html'), { encoding: 'utf-8' });

    const json = htmlMiner(html, (arg) => {
        return Object.fromEntries(Array.from(arg.$('table tr'))
            .filter(tr => arg.$(tr).find('td').length === 5)
            .map(tr => {
                const code = arg.$(tr).children().eq(1).text();
                const keywords = Array.from(new Set(`${arg.$(tr).children().eq(3).text()} | ${arg.$(tr).children().eq(4).text()}`.split(' | ')));
                return [code, keywords];
            })
        )
    })

    fs.writeFileSync(path.resolve(__dirname, 'emoji.json'), JSON.stringify(json, undefined, 4));

})();