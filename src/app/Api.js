import EmojiActions from './actions/EmojiActions';
import Emoji from './class/Emoji';

class Api {

    load() {
        fetch('./emoji.json')
            .then(function(response) {
                return response.text();
            })
            .then(function(text) {
                let emoji = JSON.parse(text).map((entry) => {
                    return new Emoji(entry);
                });
                EmojiActions.loadedEmoji(emoji);
            })
        ;
    }

}

export default new Api();
