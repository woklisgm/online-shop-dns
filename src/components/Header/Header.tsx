import { useEffect, useRef, useState } from 'react';
import { Search } from '../Search';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { CartModal } from '../CartModal';
import { BadgeButton } from '../BadgeButton';
import { ColorButton } from '../ColorButton';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import styles from './header.module.css';

function Header() {
	const {cart} = useTypedSelector(state => state.cartReducer);
	const {wish} = useTypedSelector(state => state.wishReducer);

	const [showModal, setShowModal] = useState(false);
	const [hideModal, setHideModal] = useState(true); 	// for hide animation

	const cartElement = useRef<HTMLDivElement>(null);
	const cartBtnCoord = cartElement?.current?.getBoundingClientRect();

	let topModal = cartBtnCoord?.bottom;
	let rightModal = document.documentElement.clientWidth - (cartBtnCoord?.right || 0);

	let modalCloseTimer: NodeJS.Timeout | null = null;

	const handleEnterCartModal = () => {
		if (cart.length === 0) {
			setShowModal(false);
			return;
		}
		if (modalCloseTimer) {
			clearTimeout(modalCloseTimer)
		}
		setHideModal(false);
		setShowModal(true);
	}

	const handleLeaveCartButton = () => {
		modalCloseTimer = setTimeout(() => {
			handleLeaveCartModal();
		}, 1000)
	}

	const handleLeaveCartModal = () => {
		setTimeout(() => {
			setShowModal(false);
			setTimeout(() => {setHideModal(true)}, 150);
		})
	}

	const cartModalClasses = classNames(styles['cart-modal'], {
		[styles['hide-modal']]: !showModal}
	)

	useEffect(() => {
		if (!cart.length) {
			// console.log('empty cart');
			setShowModal(false);
		} 
	}, [cart])

	return (
		<nav className={styles.header}>
			<div className={styles.container}>
				<Link to="/" className={styles.logo} />
				<Search />

				<div
					onMouseLeave={handleLeaveCartModal}
					onMouseEnter={handleEnterCartModal}
					className={cartModalClasses} 
					style={{display: hideModal ? 'none' : 'inline-block', right: rightModal, top: topModal}}
				>
					<CartModal />
				</div> 
				
				<div className={styles.buttons} ref={cartElement} >
					<Link to='/wishlist'>
						<BadgeButton title='Избранное' badge={wish.length}  />
					</Link>
					<div className={styles['cart-btn-wrapper']}
						onMouseEnter={handleEnterCartModal} 
						onMouseLeave={handleLeaveCartButton}
					>
						<BadgeButton title='Корзина' badge={cart.length} />
					</div>
				</div>
				<div className={styles.login}> 
					<ColorButton title='Войти' border='black' color='black' />
				</div>
			</div>
		</nav>
	)
}

export {Header};