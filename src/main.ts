import { createApp } from "vue";
import App from "./App.vue";
// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";
// element plus
import ElementPlus from "element-plus";
// element icons
import * as Icons from "@element-plus/icons-vue";
// element css
import "element-plus/dist/index.css";
// custom directives
import directives from "@/directives/index";
// vue Router
import router from "@/routers/index";
// vue i18n
import I18n from "@/language/index";
// pinia store
import pinia from "@/store/index";

import "animate.css"

const app = createApp(App);

// 注册element Icons组件
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(router).use(I18n).use(pinia).use(directives).use(ElementPlus).mount("#app");
