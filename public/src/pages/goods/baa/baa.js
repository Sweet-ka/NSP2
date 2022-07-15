import { Base } from "../../../base/base.js";
import { baa_categories } from "../goods_content.js";

export class Baa extends Base {
    constructor(className) {
        super('div', className);
        this.container = new Base('div', 'container');
        this.container.render(this.node);

        this.field = new Base('div', 'field');
        this.field.render(this.container.node);

        this.field_menu = new Base('div', 'field_menu');
        this.field_menu.render(this.field.node);

        this.field_display = new Base('div', 'field_display');
        this.field_display.render(this.field.node);
        this.field_display.node.innerText = 'field_display'


        for (let i = 0; i < baa_categories.length; i++) {
            this.baa_categories_btn = new Base('button', 'baa_cat');
            this.baa_categories_btn.render(this.field_menu.node);
            this.baa_categories_btn.node.innerText = baa_categories[i];
        }
    }
}

export const baa = new Baa('baa')