import { AppActionCreators } from './reducers/app/action-creators';
import { AuthActionCreators } from './reducers/auth/action-creators';
import { CartActionCreators } from './reducers/cart/action-creators';
import { WishActionCreators } from './reducers/wish/action-creators';

export const allActionCreators = {
	...AppActionCreators,
	...AuthActionCreators,
	...CartActionCreators,
	...WishActionCreators,
}