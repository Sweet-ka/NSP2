import { Base } from "../../../base/base.js";
import { NewReviewCard } from "./new_review_card.js";
import { ReviewCard } from "./revew_card.js";

export class ReviewsHome extends Base{
    reviews_wrap;
    reviews_part;
    reviews_custom;
    old_reviews;
    new_review;
    new_review_custom;
    new_review_card;
    read_all;
    read_all_btn;

    constructor(className) {
        super('div', className);

        this.reviews_wrap = new Base('div', 'reviews_wrap');
        this.reviews_wrap.render(this.node);

        this.reviews_part = new Base('h2');
        this.reviews_part.render(this.reviews_wrap.node);
        this.reviews_part.node.innerText = 'Отзывы партнеров и покупателей';


        this.reviews_custom = new Base('h2');
        this.reviews_custom.render(this.reviews_wrap.node);
        this.reviews_custom.node.innerText = 'Отзывы о продукции';

        this.old_reviews = new Base('div', 'old_reviews');
        this.old_reviews.render(this.reviews_wrap.node);

        this.new_review = new Base('div', 'new_review');
        this.new_review.render(this.reviews_wrap.node);

        this.new_review_custom = new Base('h5');
        this.new_review_custom.render(this.new_review.node);
        this.new_review_custom.node.innerText = 'Новый отзыв';

        this.read_all = new Base('div', 'read_all');
        this.read_all.render(this.node);

        this.read_all_btn = new Base('button', 'btn btn-primary');
        this.read_all_btn.render(this.reviews_wrap.node);
        this.read_all_btn.node.innerText = 'Читать все отзывы';
    }

    addReviews(arr, rev) {
        for (let item of arr) {
            this.review_card = new ReviewCard('review_card')
            this.review_card.render(this.old_reviews.node);
            this.review_card.createCard(item);
        }
        this.new_review_card = new NewReviewCard('new_review_card');
        this.new_review_card.render(this.new_review.node);
        this.new_review_card.createCard(rev);

    }
}