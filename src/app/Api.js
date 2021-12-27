import EmojiActions from './actions/EmojiActions';

export const load = () => {
    const cached = window.snapStore && window.snapStore['/github-emoji/emoji.json']
    const emojis = cached ? Promise.resolve(cached) : fetch(`${window.location.pathname.replace(/\/$/, '')}/emoji.json`).then(response => response.json())

    emojis
        .then(json => Object.entries(json))
        .then(json => EmojiActions.loadedEmoji(json))
}
