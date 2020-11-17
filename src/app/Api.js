import EmojiActions from './actions/EmojiActions';

export const load = () =>
    fetch(`${window.location.pathname.replace(/\/$/, '')}/emoji.json`)
        .then(response => response.json())
        .then(json => Object.entries(json))
        .then(json => EmojiActions.loadedEmoji(json))
