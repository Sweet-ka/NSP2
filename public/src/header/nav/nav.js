import { Base } from "../../base/base.js";

export class Nav extends Base{
    header_nav_list;

    constructor(className, links = [{label, herf}]) {
        super('nav', className);

        this.header_nav_list = new Base('ul', 'header_nav_list');
        this.header_nav_list.render(this.node);
        for (let i = 0; i < links.length; i++) {
            this.li = new Base('li');
            this.li.render(this.header_nav_list.node);
            this.a = new Base('a', 'menu');
            this.a.render(this.li.node);
            this.a.node.innerText = links[i].label;
            this.a.node.setAttribute('href', links[i].href)
        }
    }
}

