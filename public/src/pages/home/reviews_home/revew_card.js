import { Base } from "../../../base/base.js";

export class ReviewCard extends Base{
    review_user;
    review_user_avatar;
    review_user_data;
    review_user_name;
    review_card_body;
    review_card_text;

    constructor(className) {
        super('div', className);

        this.review_user = new Base('div', 'review_user');
        this.review_user_avatar = new Base('div', 'review_user_avatar');
        this.review_user_data = new Base('div', 'review_user_data');
        this.review_user_name = new Base('div', 'review_user_name');
        this.review_card_body = new Base('div', 'review_card_body');
        this.review_card_text = new Base('p', 'review_card_text');

        this.review_user.render(this.node);
        this.review_user_avatar.render(this.review_user.node);
        this.review_user_data.render(this.review_user.node);
        this.review_user_name.render(this.review_user_data.node);
        this.review_card_body.render(this.node);
        this.review_card_text.render(this.review_card_body.node);
    }

    createCard(item = {id, userName, review}) {
        this.review_user_avatar.node.style.backgroundImage = `URL(/images/avatars/id_${item.id}.jpeg)`;
        this.review_user_data.node.innerText = item.userName;
        this.review_card_text.node.innerText = item.review;
    }
}