import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Header } from '../Header'
import styles from './layout.module.css';


function Layout() {
	return (
		<div className={styles.layout} >
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export {Layout}