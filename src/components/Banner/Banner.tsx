import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import styles from './banner.module.css';

function Banner() {
	const [translate, setTranslate] = useState(0);
	const [activeBtn, setActiveBtn] = useState(0);

	const wrapperRef = useRef<HTMLDivElement>(null);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const el = e.target as HTMLDivElement;
		if (wrapperRef) {
			const btnNumber = Number(el.dataset.number);
			const bannerWidth = Number(wrapperRef.current?.offsetWidth);
			

			setActiveBtn(btnNumber);
			setTranslate(-bannerWidth * btnNumber);			
		}
	}

	return (
		<div className={styles.banner}>
			<div className={styles.slider} style={{transform: `translateX(${translate}px)`}}>
				<div className={styles.wrapper} ref={wrapperRef}>
					<img src={'https://i.imgur.com/c25XGGQ.jpg'} height="220" width="580" alt="banner" />
				</div>
				<div className={styles.wrapper}>
					<img src={'https://i.imgur.com/r0nhCfw.jpg'} height="220" width="580" alt="banner" />
				</div>
			</div>

			<div className={styles.buttons} onClick={handleClick}> 
				<div className={classNames(styles.btn, {[styles.active]: activeBtn === 0})} data-number={0}></div>
				<div className={classNames(styles.btn, {[styles.active]: activeBtn === 1})} data-number={1}></div>
			</div>
		</div>
	);
}

export {Banner};