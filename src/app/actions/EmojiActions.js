import AppDispatcher from '../../AppDispatcher';
import ActionTypes from './ActionTypes';
import { load } from '../Api';

export default {
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
