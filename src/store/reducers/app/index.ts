import { IAppState, AppAction, AppActionsEnum } from './types';

const initialState: IAppState = {
	discount: 0,
	isShowGame: false,
	isShowGameMenu: true
}

export default function appReducer(state = initialState, {type, payload}: AppAction): IAppState {
	switch (type) {
		case AppActionsEnum.SHOW_GAME: return {
			...state,
			isShowGame: true,
			isShowGameMenu: false
		}
		case AppActionsEnum.HIDE_GAME: return {
			...state,
			isShowGame: false,
		}
		case AppActionsEnum.SHOW_GAME_MENU: return {
			...state,
			isShowGame: false,
			isShowGameMenu: true
		}
		case AppActionsEnum.HIDE_GAME_MENU: return {
			...state,
			isShowGameMenu: false
		}
		case AppActionsEnum.SET_DISCOUNT: return {
			...state,
			discount: payload
		}
		default:
			return state;
	}
}