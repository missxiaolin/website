import { defineStore } from "pinia";
import { AuthState } from "../interface";

// AuthStore
export const AuthStore = defineStore({
	id: "AuthState",
	state: (): AuthState => ({
		// 用户按钮权限列表
		authButtons: {},
		// 路由权限列表
		authRouter: []
	}),
	getters: {},
	actions: {}
});
