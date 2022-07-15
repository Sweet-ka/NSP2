import { Base } from "../../base/base.js";

export class Logo extends Base {
    logo_link;
    logo_img;
    logo_title;

    constructor(className) {
        super('div', className);
        this.logo_link = new Base('a', 'logo_link');
        this.logo_img = new Base('img', 'logo_img');
        this.logo_title = new Base('div', 'with');

        this.logo_link.render(this.node);
        this.logo_img.render(this.logo_link.node);
        this.logo_title.render(this.node);
    }
};
