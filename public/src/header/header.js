import { Base } from "../base/base.js";
import { Logo } from "./logo/logo.js";
import { Nav } from "./nav/nav.js";

export class Header extends Base {
    container;
    logo;
    h1;
    nav;
    reg;

    constructor(className, links = [{label, herf}]) {
        super('header', className);
        this.container = new Base('div', 'container header_container');
        this.logo = new Logo('logo');
        this.h1 = new Base('h1', 'header_title');
        this.nav = new Nav('header_nav', links);
        this.reg = new Base('button', 'reg');

        this.container.render(this.node);
        this.logo.render(this.container.node);
        this.h1.render(this.node);
        this.nav.render(this.container.node);
        this.reg.render(this.container.node);
    }
};

const links = [
    {
        label: 'aaa',
        href: '#goods'
    },
    {
        label: 'bbb',
        href: '#bbb'
    },
    {
        label: 'ccc',
        href: '#ccc'
    }
    ]
export const header = new Header('header', links);
header.logo.logo_img.node.setAttribute('src', '/images/logo/IMG_6724.JPG');
header.logo.logo_title.node.innerHTML = `
    <div class="with">
        <p class="with_name">KATALINA.NATR</p>
        <p class="with_with">with <span class="natures"> Natures Sunshine</span></p>
    </div>
`
header.h1.node.innerText = 'NSP';
header.reg.node.innerText = 'Личный кабинет';
