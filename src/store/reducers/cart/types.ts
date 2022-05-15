import { IGoods } from '../../../models/IGoods';

// export type CartGoods = Pick<IGoods, 'name' | 'productId' | 'price' | 'image'> & {count: number};

export interface CartGoods extends Pick<IGoods, 'name' | 'productId' | 'price' | 'image'> {
	count: number
}

export interface CartState {
	isLoading: boolean;
	error: string;
	cart: CartGoods[];
}

export enum CartActionsEnum {
	SET_ERROR = 'SET_ERROR',
	CLEAR_CART = 'CLEAR_CART',
	ADD_TO_CART = 'ADD_TO_CART',
	INCREASE_GOODS = 'INCREASE_GOODS',
	DECREASE_GOODS = 'DECREASE_GOODS',
	SET_IS_LOADING = 'SET_IS_LOADING',
	REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export interface SetIsLoadingAction {
	type: CartActionsEnum.SET_IS_LOADING;
	payload: boolean;
}

export interface SetErrorAction {
	type: CartActionsEnum.SET_ERROR;
	payload: string;
}

export interface RemoveFromCartAction {
	type: CartActionsEnum.REMOVE_FROM_CART;
	payload: string;
}

export interface AddToCartAction {
	type: CartActionsEnum.ADD_TO_CART;
	payload: CartGoods;
}

export interface IncreaseGoodsAction {
	type: CartActionsEnum.INCREASE_GOODS;
	payload: string;
}

export interface DecreaseGoodsAction {
	type: CartActionsEnum.DECREASE_GOODS;
	payload: string;
}

export interface ClearCartAction {
	type: CartActionsEnum.CLEAR_CART;
	payload?: undefined;
}

export type CartAction = SetIsLoadingAction 
	| SetErrorAction 
	| ClearCartAction	
	| AddToCartAction 
	| IncreaseGoodsAction 
	| DecreaseGoodsAction
	| RemoveFromCartAction;