import { IGoods } from '../../../models/IGoods';

// export type CartGoods = Pick<IGoods, 'name' | 'productId' | 'price' | 'image'> & {count: number};

export interface WishGoods extends Pick<IGoods, 'productId' | 'name' | 'description' | 'price' | 'credit'  | 'price' | 'rating' | 'image'> {

}

export interface WishState {
	isLoading: boolean;
	error: string;
	wish: WishGoods[];
}

export enum WishActionsEnum {
	SET_ERROR = 'SET_ERROR',
	ADD_TO_WISH = 'ADD_TO_WISH',
	SET_IS_LOADING = 'SET_IS_LOADING',
	REMOVE_FROM_WISH = 'REMOVE_FROM_WISH',
}

export interface SetIsLoadingAction {
	type: WishActionsEnum.SET_IS_LOADING;
	payload: boolean;
}

export interface SetErrorAction {
	type: WishActionsEnum.SET_ERROR;
	payload: string;
}

export interface RemoveFromWishAction {
	type: WishActionsEnum.REMOVE_FROM_WISH;
	payload: string;
}

export interface AddToWishAction {
	type: WishActionsEnum.ADD_TO_WISH;
	payload: WishGoods;
}

export type WishAction = SetIsLoadingAction 
	| SetErrorAction 
	| AddToWishAction 
	| RemoveFromWishAction;