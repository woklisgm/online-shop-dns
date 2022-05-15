import { AppDispatch } from '../..';
import axios from 'axios';
import {AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction, } from './types';

export const AuthActionCreators = {
	// sync
	setUser: (user: string): SetUserAction => ({
		type: AuthActionsEnum.SET_USER, 
		payload:user
	}),
	setIsAuth: (auth: boolean): SetAuthAction => ({
		type: AuthActionsEnum.SET_AUTH,
		payload: auth
	}),
	setIsLoading: (payload: boolean): SetIsLoadingAction => ({
		type: AuthActionsEnum.SET_IS_LOADING,
		payload: payload
	}),
	setError: (payload: string): SetErrorAction => ({
		type: AuthActionsEnum.SET_ERROR,
		payload: payload
	}),
	// async
	login: (username: string, password: string) => 
		async (dispatch: AppDispatch) => {
			try {
				dispatch(AuthActionCreators.setIsLoading(true));
				const response = await axios.get('./users.json');
				
				// ...
				localStorage.setItem('auth', 'true');
				localStorage.setItem('username', 'admin');
				dispatch(AuthActionCreators.setUser('admin'));
				dispatch(AuthActionCreators.setIsAuth(true));
				//...

				dispatch(AuthActionCreators.setIsLoading(false));
			} catch (e) {
				dispatch(AuthActionCreators.setError('Ошибка авторизации'));
			}
		},
	logout: () => 
		async (dispatch: AppDispatch) => {
			try {
				localStorage.removeItem('auth');
				localStorage.removeItem('username');
				dispatch(AuthActionCreators.setUser(''));
				dispatch(AuthActionCreators.setIsAuth(false));
			} catch (e) {
				console.log(e);
			}
		}
}