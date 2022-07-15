import { content_slider } from "../../../content_module.js";
import { hits } from "../../../hits/hits.js";
import { newReview, reviews } from "../../../reviews/reviews.js";
import { Base } from "../../base/base.js";
import { Consult } from "./consult/consult.js";
import { ReviewsHome } from "./reviews_home/reviews_home.js";
import { HitsApp } from "./slider_hits/hitsApp.js";
import { SliderApp } from "./slider_main/sliderApp.js";

export class Home extends Base{
    container;
    slider;
    slider_main;
    consult;
    slider_hits;
    reviews;

    constructor(className) {
        super('div', className);

        this.container = new Base('div', 'container');
        this.container.render(this.node);

        this.slider = new Base('section', 'slider');
        this.slider.render(this.container.node);

        this.slider_main = new SliderApp('itcss');
        this.slider_main.render(this.slider.node);

        this.consult = new Consult('consult');
        this.consult.render(this.container.node);

        this.slider_hits = new Base('section', 'slider_hits');
        this.slider_hits.render(this.container.node);

        this.slider_hits_title = new Base('h2');
        this.slider_hits_title.render(this.slider_hits.node);
        this.slider_hits_title.node.innerText = 'Хиты продаж';

        this.hitsApp = new HitsApp('slider');
        this.hitsApp.render(this.slider_hits.node);

        this.reviews = new Base('section', 'reviews');
        this.reviews.render(this.container.node);

        this.reviews_home = new ReviewsHome('reviews_home');
        this.reviews_home.render(this.reviews.node);

    }
}

export const home = new Home('home');
//location.hash = 'home'
home.slider_main.sliderInit(content_slider);
home.hitsApp.addHits(hits);
home.reviews_home.addReviews(reviews, newReview);

