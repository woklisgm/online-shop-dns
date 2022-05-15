import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Rating } from '../Rating';
import styles from './main-card.module.css';

interface IMainCardProps {
	name: string;
	image: string;
	rating: string;
	comments: string;
	price: string;
	credit: string;
}


function MainCard({name, image, rating, comments, credit, price}: IMainCardProps): JSX.Element {
	console.log('MainCard', credit);
	

	const [inCart, setInCart] = useState(false);
	const [inWish, setInWish] = useState(false);

	const {addToCart, addToWish, removeFromCart, removeFromWish} = useActions();
	const {cart} = useTypedSelector(state => state.cartReducer);
	const {wish} = useTypedSelector(state => state.wishReducer);

	const handleCartClick = () => {
		if (inCart) {
			removeFromCart(name);
		} else {
			addToCart({count: 1, image: image, name: name, price: price, productId: name});
		}
	}

	const handleWishClick = () => {
		if (inWish) {
			removeFromWish(name);
		}
		// } else {
		// 	addToWish({
		// 		name: name, 
		// 		image: image, 
		// 		price: price, 
		// 		productId: name, 
		// 		credit: "tmpCredit", 
		// 		description: name,
		// 		rating: {count: 87, star: 4.7}
		// 	});
		// }
	}	

	const cartBtnStyle = classNames(styles.btn, {
		[styles.active]: inCart
	})

	const wishBtnStyle = classNames(styles.btn, {
		[styles.active]: inWish
	})

	useEffect(() => {
		setInCart(Boolean(cart.find(goods => goods.productId === name)));
		setInWish(Boolean(wish.find(goods => goods.productId === name)));
	}, [cart, name, wish])

	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<a href="#!">
					<img src={image} alt='aa' />
				</a>
			</div>
			<div className={styles.description}>
				<span>
					{name}
				</span>
				<div className={styles.stat}>
					<div className={styles.rating}>
						<Rating rating={rating} />
					</div>
					<div className={styles.comments}>
						<i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15"><path d="M20,0H4A4,4,0,0,0,0,4V16a4,4,0,0,0,4,4H6.9l4.451,3.763a1,1,0,0,0,1.292,0L17.1,20H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,16a2,2,0,0,1-2,2H17.1a2,2,0,0,0-1.291.473L12,21.69,8.193,18.473h0A2,2,0,0,0,6.9,18H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2Z"/><path d="M7,7h5a1,1,0,0,0,0-2H7A1,1,0,0,0,7,7Z"/><path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"/><path d="M17,13H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"/></svg></i>
						<span>{comments}</span>
					</div>
				</div>
			</div>
			<div className={styles.info}>
				<div className={styles.price}>
					<div className={styles.mainPice}>{price} ₽</div>
					<div className={styles.credit}>
						от {credit} ₽/ мес.
					</div>
				</div>
				<div className={styles['info-buttons']}>
					<div className={styles.like} >
						<div className={wishBtnStyle} onClick={handleWishClick}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30" height="30"  enable-background="new 0 0 20 20"><path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"/></svg>
						</div>
					</div>
					<div className={styles.cart} onClick={handleCartClick}>
						<div className={cartBtnStyle}>
							{inCart 
								? (<svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" viewBox="0 0 507.506 507.506" width="20" height="20">
										<g>
											<path d="M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z"/>
										</g>
									</svg>)
								: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="23" height="23"  >
										<g>
											<path d="M408.2,386.4c-30,0-54.3,24.3-54.4,54.4c0,30,24.3,54.3,54.4,54.3c30,0,54.3-24.3,54.3-54.3   C462.5,410.8,438.2,386.4,408.2,386.4z M408.2,473.4c-18,0-32.6-14.6-32.6-32.6s14.6-32.6,32.6-32.6v0c18,0,32.6,14.6,32.6,32.6   C440.8,458.8,426.2,473.4,408.2,473.4z"/>
											<path d="M190.8,386.4c-30,0-54.4,24.3-54.4,54.4s24.3,54.3,54.4,54.3c30,0,54.3-24.3,54.3-54.3   C245.1,410.8,220.8,386.4,190.8,386.4z M190.8,473.4c-18,0-32.6-14.6-32.6-32.6c0-18,14.6-32.6,32.6-32.6v0   c18,0,32.6,14.6,32.6,32.6C223.4,458.8,208.8,473.4,190.8,473.4z"/>
											<path d="M495.1,82.1H104L92.7,25.6c-1-5.1-5.5-8.7-10.6-8.7H16.9c-6,0-10.9,4.9-10.9,10.9c0,6,4.9,10.9,10.9,10.9h56.3   l53,264.9c7.2,35.5,38.4,61.1,74.6,61.2h250.9v0c6,0,10.9-4.9,10.9-10.9c0-6-4.9-10.9-10.9-10.9H200.8   c-25.9-0.1-48.2-18.3-53.3-43.7l-4.3-21.5H435c27.4-0.1,50.5-20.4,53.9-47.6l17-135.8c0.1-0.5,0.1-0.9,0.1-1.4   C506,86.9,501.1,82.1,495.1,82.1z M467.4,227.4c-2.1,16.3-15.9,28.5-32.4,28.6H138.8l-30.4-152.2h374.4L467.4,227.4z"/>
										</g>
									</svg>)
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export {MainCard};