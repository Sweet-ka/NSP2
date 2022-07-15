import { baa } from "../pages/goods/baa/baa.js";
import { goods } from "../pages/goods/goods.js";
import { home } from "../pages/home/home.js";
import { natrLab } from "../pages/natr.lab/natr.lab.js";
import { notFound } from "../pages/notFound/notFound.js";

export const appRoutes = [
    { path: '', component: home },
    { path: 'natrlab', component: natrLab },
    { path: 'goods', component: goods },
    { path: '**', component: notFound },

    { path: 'baa', component: baa },

];  