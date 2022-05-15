import classNames from 'classnames';
import React, { createRef, useEffect, useRef, useState } from 'react';
import styles from './cards.module.css';

interface ICardsProps {
	cards: any[];
	visibleCount: number;
}

function Cards({cards, visibleCount}: ICardsProps) {
	const [, forceUpdate] = useState(new Date())
	const [portableEl, setPortableEl] = useState(null);
	const [slide, setSlide] = useState(0);

	const goods = useRef([...cards]);
	// const itemsRef = useRef(Array(goods.current.length).fill(null).map((_, i) => _ || createRef())); 

	const handleClickRight = (e:React.MouseEvent) => {
		setPortableEl(goods.current.pop());
		setSlide(1);
	}

	const handleClickLeft = (e:React.MouseEvent) => {
		setPortableEl(goods.current.shift());
		setSlide(-1);
	}

	useEffect(() => {
		setSlide(0);
		if (slide === 1) {
			goods.current.unshift(portableEl);	
		}
		if (slide === -1) {
			goods.current.push(portableEl);
		}
	}, [slide])

	useEffect(() => {
		goods.current = [...cards];
	}, []);

	useEffect(() => {
		goods.current = [...cards];
		forceUpdate(new Date());
	}, [cards]);

	return (
		<div className={styles.cards}>
			<div className={classNames(styles.wrapper)} >
			{
				goods.current.map((card, i) => {
					const cardStyle = classNames(
						styles.card, 
						{[styles.hiden]: i < 2 || i > 4},
					);
					return (
						<div 
							key={card.name}
							className={cardStyle}
							style={{
								left: `${286 * (i - 2)}px`,
							}}
						>
							<div className={styles.image}>
								<img src={card.image} alt="card_1" />
							</div>
							<div className={styles.description}>
								<div className={styles.name}>
									{card.name}
								</div>
								<div className={styles.price}>
									от {card.price} &#8381;
								</div>
							</div>
						</div>
					)
				}
				)
			}
			</div>
			<button 
				className={classNames(styles.btn, styles.btnLeft)}
				onClick={handleClickRight}
			>
				&#10094;
			</button>
			<button 
				className={classNames(styles.btn, styles.btnRight)} 
				onClick={handleClickLeft}
			>
				&#10095;
			</button>
		</div>
	);
}

export {Cards};