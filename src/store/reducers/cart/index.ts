import { CartState, CartAction, CartActionsEnum } from './types';


const initialState: CartState = {
	isLoading: false,
	error: '',
	cart: []
}

export default function cartReducer(state = initialState, {type, payload}: CartAction) {
	switch (type) {
		case CartActionsEnum.ADD_TO_CART: {
			const desired = state.cart.find(goods => goods.productId === payload.productId);
			if (!desired) {
				return {...state, cart: [...state.cart, {...payload, count: 1}]}
			}
			return state;
		}
		case CartActionsEnum.DECREASE_GOODS: {
			const cart = [...state.cart];
			const desired = cart.find(goods => goods.productId === payload);
			if (desired) {
				desired.count = desired.count > 1 ? desired.count - 1 : 1;
			}
			
			return {...state, cart: [...cart]};
		}
		case CartActionsEnum.INCREASE_GOODS: {
			const cart = [...state.cart];
			const desired = cart.find(goods => goods.productId === payload);
			if (desired) {
				desired.count += 1;
			}
			
			return {...state, cart: [...cart]};
		}
		case CartActionsEnum.REMOVE_FROM_CART: {
			const cart = state.cart.filter(goods => goods.productId !== payload);
			return {
				...state,
				cart: [...cart]
			}
		}
		case CartActionsEnum.SET_ERROR: return {
			...state, 
			isLoading: false,
			error: payload
		}
		case CartActionsEnum.SET_IS_LOADING: return {
			...state,
			isLoading: payload
		}
		case CartActionsEnum.CLEAR_CART: return {
			...state,
			cart: []
		}
		default: return state;
	}
}