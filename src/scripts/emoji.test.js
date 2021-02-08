/**
 * @jest-environment node
 */

const { dumpEmoji } = require('./emoji');

describe('dump-emoji', () => {
    it('should contains the correct number of emojis', async () => {
        const emojis = await dumpEmoji();
        expect(Object.keys(emojis).length).toBe(1799);
    })
})
