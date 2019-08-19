
export default class Emoji {

    constructor({ code, html_entity, image, name, unicode }) {
        this.code = code;
        this.html_entity = html_entity;
        this.image = image;
        this.name = name;
        this.unicode = unicode;
    }

    get relativeImage() {
        return `emoji/${this.name}.png`;
    }

    static fromJson(json) {
        const emoji = json.map((entry) => {
            return new this(entry);
        });

        return emoji;
    }

}