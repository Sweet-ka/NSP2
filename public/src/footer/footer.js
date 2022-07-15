import { Base } from "../base/base.js";

export class Footer extends Base{
    constructor(className) {
        super('footer', className);
        this.info = new Base('div');
        this.info.render(this.node);
        this.info.node.innerText = 'здесь будет какая-то информация';
        this.node.style.color = '#c9af94';
        this.node.style.padding = '150px';
    }
}

export const footer = new Footer('footer');