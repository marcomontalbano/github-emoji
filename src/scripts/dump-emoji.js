// https://home.unicode.org/
// https://www.unicode.org/reports/tr51/
// http://www.unicode.org/emoji/charts/emoji-list.html

const fs = require('fs');
const path = require('path');

const { dumpEmoji } = require('./emoji');

dumpEmoji().then((emojis) => {
    const distFolder = path.resolve(__dirname, '..', '..', 'dist');
    const publicFolder = path.resolve(__dirname, '..', '..', 'public');

    if (fs.existsSync(distFolder)) {
        fs.rmdirSync(distFolder, { recursive: true });
    }

    fs.mkdirSync(distFolder);

    fs.writeFileSync(
        path.resolve(distFolder, 'detailed.js'),
        `export const emoji = ${ JSON.stringify(emojis, undefined, 4).replace(/\\+/g, '\\') };`
    );

    const slimEmojis = Object.fromEntries(Object.entries(emojis).map(([name, emoji]) => {
        return [name, emoji.valid ? emoji.escaped : emoji.image]
    }));

    fs.writeFileSync(
        path.resolve(distFolder, 'index.js'),
        `export const emoji = ${ JSON.stringify(slimEmojis, undefined, 4).replace(/\\+/g, '\\') };`
    );

    fs.writeFileSync(
        path.resolve(publicFolder, 'emoji.json'),
        JSON.stringify(slimEmojis).replace(/\\+/g, '\\')
    );
})