import { Base } from "../../../base/base.js";

export class SliderApp extends Base{
    itcss__wrapper;
    itcss__items;
    itcss__control_prev;
    itcss__control_next;

    constructor(className) {
        super('div', className);

        this.itcss__wrapper = new Base('div', 'itcss__wrapper');
        this.itcss__items = new Base('div', 'itcss__items');

        this.itcss__wrapper.render(this.node);
        this.itcss__items.render(this.itcss__wrapper.node);

        this.itcss__control_prev = new Base('a', 'itcss__control itcss__control_prev');
        this.itcss__control_next = new Base('a', 'itcss__control itcss__control_next');
        this.itcss__control_prev.render(this.node);
        this.itcss__control_next.render(this.node);
        this.itcss__control_prev.node.setAttribute('role', 'button');
        this.itcss__control_prev.node.setAttribute('data-slide', 'prev');
        this.itcss__control_prev.node.setAttribute('herf', '');
        this.itcss__control_next.node.setAttribute('role', 'button');
        this.itcss__control_next.node.setAttribute('data-slide', 'next');
        this.itcss__control_next.node.setAttribute('herf', '');
    }

    sliderInit(content = []) {
        for (let i = 0; i < content.length; i++) {
            this.itcss__item = new Base('div', 'itcss__item');
            this.itcss__item_inner = new Base('div', 'itcss__item_inner');
            this.itcss__item_inner_text = new Base('div', 'itcss__item_inner_text');
            this.itcss__item_inner_title = new Base('div', 'itcss__item_inner_title');
            this.itcss__item_inner_group = new Base('div', 'itcss__item_inner_group');
            this.itcss__item_inner_btn = new Base('button', 'itcss__item_inner_btn');
            this.itcss__item_inner_image = new Base('div', 'itcss__item_inner_image');
            this.itcss__item_inner_image_img = new Base('img', '');

            this.itcss__item.render(this.itcss__items.node);
            this.itcss__item_inner.render(this.itcss__item.node);
            this.itcss__item_inner_text.render(this.itcss__item_inner.node);

            this.itcss__item_inner_title.render(this.itcss__item_inner_text.node);
            this.itcss__item_inner_group.render(this.itcss__item_inner_text.node);
            this.itcss__item_inner_btn.render(this.itcss__item_inner_text.node);

            this.itcss__item_inner_image.render(this.itcss__item_inner.node);
            this.itcss__item_inner_image_img.render(this.itcss__item_inner_image.node);

            this.itcss__item_inner_title.node.innerHTML = content[i].title;
            this.itcss__item_inner_group.node.innerHTML = content[i].group;
            this.itcss__item_inner_btn.node.innerHTML = content[i].button;
            this.itcss__item_inner_image_img.node.setAttribute('src', content[i].image)
        }
    }
}