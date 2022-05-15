// import { AppDispatch } from '../..';
import { WishGoods, 
	SetErrorAction, 
	AddToWishAction,
	WishActionsEnum,
	SetIsLoadingAction,
	RemoveFromWishAction } from './types';

export const WishActionCreators = {
	// sync
	setIsLoading: (payload: boolean): SetIsLoadingAction => ({
		type: WishActionsEnum.SET_IS_LOADING,
		payload
	}),
	setError: (payload: string): SetErrorAction => ({
		type: WishActionsEnum.SET_ERROR,
		payload
	}),
	addToWish: (payload: WishGoods): AddToWishAction => ({
		type: WishActionsEnum.ADD_TO_WISH,
		payload
	}),
	removeFromWish: (payload: string): RemoveFromWishAction => ({
		type: WishActionsEnum.REMOVE_FROM_WISH,
		payload
	}),

	// asyn
	// getCartFromServer: () => {
	// 	async (dispatch: AppDispatch) => {
	// 		try {

	// 		} catch (e) {

	// 		}
	// 	}
	// }
};