import { defineStore } from "pinia";
import { GlobalState, ThemeConfigProp } from "./interface";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStore = defineStore({
	// id: 必须的，在所有 Store 中唯一
	id: "GlobalState",
	// state: 返回对象的函数
	state: (): GlobalState => ({
		userInfo: "",
		// themeConfig
		themeConfig: {
			// 默认 primary 主题颜色
			primary: "#409eff",
			// 是否开启深色模式
			isDark: false
		}
	}),
	getters: {},
	actions: {
		// setThemeConfig
		setThemeConfig(themeConfig: ThemeConfigProp) {
			this.themeConfig = themeConfig;
		}
	}
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
