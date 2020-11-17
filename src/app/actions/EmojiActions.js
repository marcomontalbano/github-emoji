import AppDispatcher from '../../AppDispatcher';
import ActionTypes from './ActionTypes';
import { load } from '../Api';

const emojiActions = {
    load() {
        load();
    },

    loadedEmoji(emoji) {
        AppDispatcher.dispatch({
            type: ActionTypes.LOADED_EMOJI,
            value: emoji,
        });
    },

    search(name) {
        AppDispatcher.dispatch({
            type: ActionTypes.SEARCH,
            value: name,
        });
    },
};

export default emojiActions;
