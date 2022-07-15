import { wfm } from "../../../shared.js";
import { appModule, AppModule } from "../../appModule/appModule.js";
import { Base } from "../../base/base.js";
import router from "../../router/router.js";
import { appRoutes } from "../../router/routes.js";
import { natrLab } from "../natr.lab/natr.lab.js";

export class Goods extends Base {
    container;
    goods_category_list;

    constructor(className) {
        super('div', className);

        this.container = new Base('div', 'container');
        this.goods_category_list = new Base('ul', 'goods_category_list');

        this.container.render(this.node);
        this.goods_category_list.render(this.container.node);
    }

    async addGoodsGroup() {
        const url = 'goodsGroup';
        const response = await fetch(url);
        const arr = await response.json();

        for (let item of arr) {
            let goodsGroup = Object.values(item)[1];
            let goodsCode = Object.values(item)[2];

            this.goods_category = new Base('li', 'goods_category');
            this.goods_category_link = new Base('a');
            this.goods_category_label = new Base('p', 'goods_category_label');
            this.goods_category.render(this.goods_category_list.node);
            this.goods_category_link.render(this.goods_category.node);

            const href = ('#' + goodsCode).toLowerCase();
            this.goods_category_link.node.setAttribute('href', href);
            appRoutes.push({ path: goodsCode.toLowerCase(), component: natrLab })
            this.goods_category_label.render(this.goods_category_link.node);
            this.goods_category_label.node.innerText = goodsGroup;

            if(location.hash === href){
                appModule.renderRoute();
            }
        }
    }
}

export const goods = new Goods('goods');
goods.addGoodsGroup();

