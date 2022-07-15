import { Base } from "../../../../base/base.js";

export class Card extends Base{
    img_wrapper;
    image;
    card_body;
    card_title;
    card_text;
    card_link;

    constructor(className) {
        super('div', className);

        this.img_wrapper = new Base('div', 'img_wrapper');
        this.image = new Base('img', 'card-img-top');
        this.card_body = new Base('div', 'card-body');
        this.card_title = new Base('div', 'card-title');
        this.card_text = new Base('div', 'card-text');
        this.card_link = new Base('div', 'btn btn-primary');

        this.img_wrapper.render(this.node);
        this.image.render(this.img_wrapper.node);
        this.card_body.render(this.node);
        this.card_title.render(this.card_body.node);
        this.card_text.render(this.card_body.node);
        this.card_link.render(this.card_body.node);
    }

    createCard(item = {goodsName, goodsGroup, photo}) {
        this.image.node.setAttribute('src', `/images/photo_goods/${item.photo}`);
        this.card_link.node.setAttribute('herf', '');    
        this.card_title.node.innerText = item.goodsName;
        this.card_text.node.innerText = item.goodsGroup;
        this.card_link.node.innerText = 'Подробнее';
    }
}