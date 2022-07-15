import { footer } from "../footer/footer.js";
import { header } from "../header/header.js";
import { main } from "../main/main.js";
import { Module } from "../module/module.js";
import { appRoutes } from "../router/routes.js";

export class AppModule extends Module {
    constructor(config = {
        components: [],
        bootstrap,
        routes: [{path, component}]
        }) {
      super(config);
    }
  }
  
const config = {
    components: [header, main, footer],
    bootstrap: document.body,
    routes: appRoutes
}

export const appModule = new AppModule(config)
