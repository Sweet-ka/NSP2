import { Base } from "../../../base/base.js";

export class NewReviewCard extends Base{
    new_review_goods;
    new_review_goods_photo;
    new_review_goods_photo_img;
    new_review_goods_data;
    new_review_goods_name;
    new_review_card_body;
    new_review_user_name;
    new_review_card_text;

    constructor(className) {
        super('div', className);

        this.new_review_goods = new Base('div', 'new_review_goods');
        this.new_review_goods_photo = new Base('div', 'new_review_goods_photo');
        this.new_review_goods_photo_img = new Base('img', 'new_review_goods_photo_img');
        this.new_review_goods_data = new Base('div', 'new_review_goods_data');
        this.new_review_goods_name = new Base('div', 'new_review_goods_name');
        this.new_review_goods_group = new Base('div', 'new_review_goods_group');
        this.new_review_card_body = new Base('div', 'new_review_card_body');
        this.new_review_user_name = new Base('div', 'new_review_user_name');
        this.new_review_card_text = new Base('p', 'new_review_card_text');


        this.new_review_goods.render(this.node);
        this.new_review_goods_photo.render(this.new_review_goods.node);
        this.new_review_goods_photo_img.render(this.new_review_goods_photo.node);
        this.new_review_goods_data.render(this.new_review_goods.node);
        this.new_review_goods_name.render(this.new_review_goods_data.node);
        this.new_review_goods_group.render(this.new_review_goods_data.node);
        this.new_review_card_body.render(this.node);
        this.new_review_user_name.render(this.new_review_card_body.node);
        this.new_review_card_text.render(this.new_review_card_body.node);

    }

    createCard(item = {id, userName, id_goods, goodsName, goodsGroup, review}) {
        this.new_review_goods_photo_img.node.setAttribute('src', `/images/photo_goods/id_${item.id_goods}.webp`);
        this.new_review_goods_name.node.innerText = item.goodsName;
        this.new_review_goods_group.node.innerText = item.goodsGroup;
        this.new_review_user_name.node.innerText = item.userName;
        this.new_review_card_text.node.innerText = item.review;
    }
}