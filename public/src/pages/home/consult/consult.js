import { Base } from "../../../base/base.js";
import { consult_text } from "../../../../consult_text.js";

export class Consult extends Base{
    h2;
    text;
    consult_btn_wrapper;
    about_nutr;
    get_consult;

    constructor(className) {
        super('section', className);

        this.h2 = new Base('h2', 'consult_title');
        this.text = new Base('p', 'consult_text');
        this.consult_btn_wrapper = new Base('div', 'consult_btn_wrapper');
        this.about_nutr = new Base('button', 'consult_btn about_nutr');
        this.get_consult = new Base('button', 'consult_btn get_consult');

        this.h2.render(this.node);
        this.h2.node.innerText = 'Консультация нутрициолога';
        this.text.render(this.node);
        for (let i = 0; i < consult_text.length; i++) {
            this.p = new Base('p', 'consult_text');
            this.p.render(this.node);
            this.p.node.innerText = consult_text[i];
        }
        this.consult_btn_wrapper.render(this.node);
        this.about_nutr.render(this.consult_btn_wrapper.node);
        this.about_nutr.node.innerText = 'Обо мне';
        this.get_consult.render(this.consult_btn_wrapper.node);
        this.get_consult.node.innerText = 'Получить консультацию';

        this.about_nutr.node.addEventListener('click', () => {
            location.hash = 'natrlab';
        })

        this.get_consult.node.addEventListener('click', this.getGoods);
    }
}