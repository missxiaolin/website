import { Login } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";

import http from "@/api";

/**
 * @name 示例
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
	// return http.post<Login.ResLogin>(PORT1 + `/login`, params, { headers: { noLoading: true } });
	return http.post<Login.ResLogin>(PORT1 + `/login`, params);
};
