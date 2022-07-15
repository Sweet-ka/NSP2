import { Base } from "../base/base.js";

export class Main extends Base {
    constructor(className) {
        super('main', className);
    }
};

export const main = new Main('main');