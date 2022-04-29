import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { Search } from '../Search';
import { BadgeButton } from '../BadgeButton';
import { ColorButton } from '../ColorButton';

function Header() {
	return (
		<nav className={styles.header}>
			<div className={styles.container}>
				<Link to="/" className={styles.logo} />
				<Search />
				<div className={styles.buttons}>
					<BadgeButton title='Избранное' />
					<BadgeButton title='Корзина' />
				</div>
				<div className={styles.login}> 
					<ColorButton title='Войти' border='black' color='black' />
				</div>
			</div>
		</nav>
	)
}

export {Header};