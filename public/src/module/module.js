import { wfm } from "../../shared.js";
import router from "../router/router.js";

export class Module {
  components = [];
  parentComponent;
  routes = [{}];

  constructor(config = {
    components: [],
    bootstrap,
    routes: [{path, component}]
  }) {
    this.components = config.components;
    this.parentComponent = config.bootstrap;
    this.routes = config.routes;
  }

  start() {
    this.initComponents();
    if (this.routes) {
      this.initRoutes();
    }
  }

  initComponents() {
    this.components.forEach((item) => {
      this.parentComponent.appendChild(item.node);
    });
  }

  initRoutes() {
    window.addEventListener('hashchange', this.renderRoute.bind(this));
    this.renderRoute();
  }

  renderRoute() {
    const url = router.getUrl();
    let route = this.routes.find((r) => r.path === url);
    if (wfm.isUndefined(route)) {
      route = this.routes.find((r) => r.path === '**');
    }
    const page = document.querySelector('main');
    page.innerHTML = '';
    page.appendChild(route.component.node);
  }
}