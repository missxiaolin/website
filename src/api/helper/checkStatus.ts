/**
 * @description: 校验网络请求状态码
 * @param {Number} status
 * @return void
 */
export const checkStatus = (status: number): void => {
	switch (status) {
		case 400:
			"请求失败！请您稍后重试";
			break;
		default:
			"请求失败！";
	}
};
