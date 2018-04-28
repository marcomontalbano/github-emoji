import AppDispatcher from '../../AppDispatcher';
import ActionTypes from './ActionTypes';
import Api from '../Api';

export default {
    load() {
        Api.load();
    },
    loadedEmoji(emoji) {
        AppDispatcher.dispatch({
            type: ActionTypes.LOADED_EMOJI,
            value: emoji,
        });
    },
};
