import { 
	CartGoods, 
	SetErrorAction, 
	ClearCartAction,
	AddToCartAction, 
	CartActionsEnum,
	SetIsLoadingAction,
	DecreaseGoodsAction, 
	IncreaseGoodsAction, 
	RemoveFromCartAction } from './types';

export const CartActionCreators = {
	// sync
	setIsLoading: (payload: boolean): SetIsLoadingAction => ({
		type: CartActionsEnum.SET_IS_LOADING,
		payload
	}),
	setError: (payload: string): SetErrorAction => ({
		type: CartActionsEnum.SET_ERROR,
		payload
	}),
	addToCart: (payload: CartGoods): AddToCartAction => ({
		type: CartActionsEnum.ADD_TO_CART,
		payload
	}),
	removeFromCart: (payload: string): RemoveFromCartAction => ({
		type: CartActionsEnum.REMOVE_FROM_CART,
		payload
	}),
	increaseGoods: (payload: string): IncreaseGoodsAction => ({
		type: CartActionsEnum.INCREASE_GOODS,
		payload
	}),
	decreaseGoods: (payload: string): DecreaseGoodsAction => ({
		type: CartActionsEnum.DECREASE_GOODS,
		payload
	}),
	clearCart: (): ClearCartAction => ({
		type: CartActionsEnum.CLEAR_CART
	})

	// asyn
	// getCartFromServer: () => {
	// 	async (dispatch: AppDispatch) => {
	// 		try {

	// 		} catch (e) {

	// 		}
	// 	}
	// }
};