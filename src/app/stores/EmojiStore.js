import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../../AppDispatcher';
import ActionTypes from '../actions/ActionTypes';

class EmojiStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return {
            results: [],
        };
    }

    reduce(state, action) {
        const newState = JSON.parse(JSON.stringify(state));
        switch (action.type) {
            case ActionTypes.LOADED_EMOJI:
                newState.results = action.value;
                return newState;
            default:
                return state;
        }
    }
}

export default new EmojiStore();
