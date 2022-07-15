import { Base } from "../src/base/base.js";

class Header extends Base() {
    constructor(parentNode, className) {
        super(parentNode, 'header', className);
    }
}

export const header = new Header(document.body, 'header');