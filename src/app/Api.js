import EmojiActions from './actions/EmojiActions';
import Emoji from './class/Emoji';

class Api {

    load() {
        fetch(`${window.location.pathname.replace(/\/$/, '')}/emoji.json`)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                EmojiActions.loadedEmoji(Emoji.fromJson(json));
            })
        ;
    }

}

export default new Api();
