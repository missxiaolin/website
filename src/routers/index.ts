import router from "@/routers/router";
import NProgress from "@/config/nprogress";
import { AxiosCanceler } from "@/api/helper/axiosCancel";

const axiosCanceler = new AxiosCanceler();

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach((to, from, next) => {
	NProgress.start();
	// * 在跳转路由之前，清除所有的请求
	axiosCanceler.removeAllPending();
	next();
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
