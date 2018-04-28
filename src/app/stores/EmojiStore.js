import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../../AppDispatcher';
import ActionTypes from '../actions/ActionTypes';

class EmojiStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
        this.results = [];
    }

    getInitialState() {
        return {
            results: [],
            hasResults: null,
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.LOADED_EMOJI:
                this.results = action.value;
                return {
                    hasResults: this.results.length > 0,
                    results: this.results,
                };
            case ActionTypes.SEARCH:
                return {
                    hasResults: this.results.length > 0,
                    results: this.results.filter((emoji) => {
                        return emoji.name.toLowerCase().indexOf(action.value.toLowerCase()) >= 0;
                    }),
                };
            default:
                return state;
        }
    }
}

export default new EmojiStore();
