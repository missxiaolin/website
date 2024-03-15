/* themeConfigProp */
export interface ThemeConfigProp {
	primary: string;
	isDark: boolean;
}

/* GlobalState */
export interface GlobalState {
	userInfo: any;
	themeConfig: ThemeConfigProp;
}

/* AuthState */
export interface AuthState {
	authButtons: {
		[propName: string]: any;
	};
	authRouter: string[];
}
