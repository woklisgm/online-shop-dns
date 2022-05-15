import {ShowGame, HideGame, ShowGameMenu, HideGameMenu, SetDiscount, AppActionsEnum} from './types';

export const AppActionCreators = {
	// sync 
	showGame: (): ShowGame => ({
		type: AppActionsEnum.SHOW_GAME,
		payload: null
	}),
	hideGame: (): HideGame => ({
		type: AppActionsEnum.HIDE_GAME,
		payload: null
	}),
	showGameMenu: (): ShowGameMenu => ({
		type: AppActionsEnum.SHOW_GAME_MENU,
		payload: null
	}),
	hideGameMenu: (): HideGameMenu => ({
		type: AppActionsEnum.HIDE_GAME_MENU,
		payload: null
	}),
	setDiscount: (payload: number): SetDiscount => ({
		type: AppActionsEnum.SET_DISCOUNT,
		payload,
	})
}