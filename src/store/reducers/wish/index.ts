import { WishState, WishAction, WishActionsEnum } from './types';


const initialState: WishState = {
	isLoading: false,
	error: '',
	wish: []
}

export default function wishReducer(state = initialState, {type, payload}: WishAction) {
	switch (type) {
		case WishActionsEnum.ADD_TO_WISH: {
			const desired = state.wish.find(goods => goods.productId === payload.productId);
			if (!desired) {
				return {...state, wish: [...state.wish, payload]}
			}
			return state;
		}
		case WishActionsEnum.REMOVE_FROM_WISH: {
			const wish = state.wish.filter(goods => goods.productId !== payload);
			return {
				...state,
				wish: [...wish]
			}
		}
		case WishActionsEnum.SET_ERROR: return {
			...state, 
			isLoading: false,
			error: payload
		}
		case WishActionsEnum.SET_IS_LOADING: return {
			...state,
			isLoading: payload
		}
		default: return state;
	}
}