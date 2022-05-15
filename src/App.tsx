import React, {useEffect, useState} from 'react';
import { useActions } from './hooks/useActions';
import { Router } from './router/Router';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

function App(){
	const defaultDart = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [theme, setTheme] = useLocalStorage('theme', defaultDart ? 'dark' : 'light');

	const {setUser, setIsAuth} = useActions();

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setUser(localStorage.getItem('username') || '');
			setIsAuth(true);
		}
	}, [])

	return (
		<div className="App" data-theme={theme}>
			<Router />
		</div>
	);
}

export default App;
