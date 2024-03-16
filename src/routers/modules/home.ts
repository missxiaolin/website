import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/routers/constant";

// 首页模块
const homeRouter: Array<RouteRecordRaw> = [
	{
		path: "/home",
		component: Layout,
		redirect: "/home/index",
		children: [
			{
				path: "index",
				name: "home",
				component: () => import("@/views/home/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "首页",
					key: "home"
				}
			}
		]
	},
	{
		path: "/index",
		component: Layout,
		redirect: "/index/index",
		children: [
			{
				path: "index",
				name: "index",
				component: () => import("@/views/index/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "首页",
					key: "index"
				}
			}
		]
	}
];

export default homeRouter;
