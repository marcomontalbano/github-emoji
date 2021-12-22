import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../../AppDispatcher';
import ActionTypes from '../actions/ActionTypes';

class EmojiStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
        this.storedResults = []
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
                this.storedResults = action.value;
                return {
                    hasResults: action.value.length > 0,
                    results: action.value,
                };

            case ActionTypes.SEARCH:
                return {
                    hasResults: this.storedResults.length > 0,
                    results: this.storedResults.filter(([name, content]) => {
                        return false
                            || name.toLowerCase().includes(action.value.toLowerCase())
                            || (content.keywords || []).find(k => k.includes(action.value.toLowerCase())) !== undefined
                            ;
                    }),
                };

            default:
                return state;
        }
    }
}

export default new EmojiStore();
