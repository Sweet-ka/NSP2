import { Base } from "../../../base/base.js";
import { Card } from "./card/card.js";

export class HitsApp extends Base{
    slider__container;
    slider__control_wrapper_prev;
    slider__control_wrapper_next;
    prevSlide;
    nextSlide;
    slider__wrapper;
    slider__items;

    constructor(className) {
        super('div', className);

        this.slider__container = new Base('div', 'slider__container');
        this.slider__control_wrapper_prev = new Base('div', 'slider__control_wrapper');
        this.slider__control_wrapper_next = new Base('div', 'slider__control_wrapper');
        this.prevSlide = new Base('a', 'slider__control');
        this.nextSlide = new Base('a', 'slider__control');
        this.slider__wrapper = new Base('div', 'slider__wrapper');
        this.slider__items = new Base('div', 'slider__items');

        this.slider__container.render(this.node);
        this.slider__control_wrapper_prev.render(this.slider__container.node);
        this.slider__wrapper.render(this.slider__container.node);
        this.slider__control_wrapper_next.render(this.slider__container.node);
        this.prevSlide.render(this.slider__control_wrapper_prev.node);
        this.nextSlide.render(this.slider__control_wrapper_next.node);
        this.slider__items.render(this.slider__wrapper.node);

        this.node.setAttribute('data-slider', 'chiefslider');
        this.prevSlide.node.setAttribute('href', '');
        this.prevSlide.node.setAttribute('data-slide', 'prevSlide');
        this.nextSlide.node.setAttribute('herf', '');
        this.nextSlide.node.setAttribute('data-slide', 'nextSlide');
    }

    addHits(arr) {
        for (let item of arr) {
            this.slider__item = new Base('div', 'slider__item')
            this.slider__item.render(this.slider__items.node);
            this.card = new Card('card');
            this.card.render(this.slider__item.node);
            this.card.createCard(item);
        }
    }
}
