export interface IAppState {
	isShowGame: boolean;
	isShowGameMenu: boolean;
	discount: number;
};

export enum AppActionsEnum {
	SHOW_GAME = 'SHOW_GAME',
	HIDE_GAME = 'HIDE_GAME',
	SHOW_GAME_MENU = 'SHOW_GAME_MENU',
	HIDE_GAME_MENU = 'HIDE_GAME_MENU',
	SET_DISCOUNT = 'SET_DISCOUNT',
};

export interface ShowGame {
	type: AppActionsEnum.SHOW_GAME;
	payload: null;
}

export interface HideGame {
	type: AppActionsEnum.HIDE_GAME;
	payload: null;
}

export interface ShowGameMenu {
	type: AppActionsEnum.SHOW_GAME_MENU;
	payload: null;
}

export interface HideGameMenu {
	type: AppActionsEnum.HIDE_GAME_MENU;
	payload: null;
}

export interface SetDiscount {
	type: AppActionsEnum.SET_DISCOUNT;
	payload: number;
}

export type AppAction = SetDiscount
	| ShowGame
	| HideGame
	| ShowGameMenu 
	| HideGameMenu;

