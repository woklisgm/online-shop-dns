import React, { FC, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './brands.module.css';
// import {brands} from '../../constants/brands.js';
import {BASE_MOCK_URL} from '../../constants/baseUrl';
import {getLeftCoordEl, getRightCoordEl} from '../../utils/ui/positonRelativeViewport';

interface IBrand {
	title: string;
	image: string;
}

function Brands() {
	const [brands, setBrands] = useState<IBrand[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [translate, setTranslate] = useState(0);
	const [btnLeftVis, setBtnLeftVis] = useState(false);
	const [btnRightVis, setBtnRightVis] = useState(true);

	const brandRefs = useRef<Array<HTMLDivElement>>([]);
	const containerRef = useRef<HTMLDivElement>(null);

	const addToRefs = (el: HTMLDivElement) => {
		if(el && !brandRefs.current.includes(el)) {
			brandRefs.current.push(el);
		}
	}

	const handleClickLeft = (e: React.MouseEvent) => {
		if (!containerRef.current) return;
		const containerCoord = containerRef.current.getBoundingClientRect();
		const firstEl = brandRefs.current[0];

		let penultimateEl = brandRefs.current[0];
		for (let i = 0; i < brandRefs.current.length; i++) {
			const el = brandRefs.current[i];
			const elLeft = getLeftCoordEl(el);

			if (i === 0 && elLeft === containerCoord.left) {
				break;
			}

			if (elLeft < containerCoord.left) {
				penultimateEl = el;
				continue;
			}

			const leftWidth = Math.abs(getLeftCoordEl(firstEl)) + containerCoord.left; 
			const rightWidth = containerCoord.right - Math.abs(getRightCoordEl(penultimateEl));

			setBtnRightVis(true);

			if (leftWidth < rightWidth) {
				setBtnLeftVis(false); 
				setTranslate(0);
			} else {
				const penultimateElRight = penultimateEl.offsetLeft + penultimateEl.offsetWidth;
				setTranslate(-penultimateElRight + containerCoord.right - containerCoord.left);
				if (!btnLeftVis) setBtnLeftVis(true);
			}
			break;
		}
	}

	const handleClickRight = (e: React.MouseEvent) => {
		if (!containerRef.current) return;
		const containerCoord = containerRef.current.getBoundingClientRect();
		const lastEl = brandRefs.current[brandRefs.current.length - 1];

		for (let el of brandRefs.current) {
			const elRight = getRightCoordEl(el);

			const leftWidth = getLeftCoordEl(el) - containerCoord.left;
			const rightWidth = getRightCoordEl(lastEl) - containerCoord.right;

			if (elRight > containerCoord.right) {
				const leftOffsetEl = el.offsetLeft;
				const rightOffsetEl = lastEl.offsetLeft + lastEl.offsetWidth;

				setBtnLeftVis(true);

				if (leftWidth < rightWidth ) {
					setTranslate(-leftOffsetEl);
				} else {
					setBtnRightVis(false)
					setTranslate(-rightOffsetEl + containerCoord.right - containerCoord.left);
				}
				break;
			}
			if (!btnRightVis) setBtnRightVis(true);
		}
	}

	const getBrands = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(`${BASE_MOCK_URL}/brands/`);
			const result = await response.json();

			setBrands(result);
		} catch (e) {
			console.error(e);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		getBrands();
	}, [])

	// TODO: move button to SliderButton
	return (
		<div  className={styles.container} ref={containerRef}>
			<div className={styles.buttons}>
				<button 
					style={{visibility: btnLeftVis ? 'visible' : 'hidden'}}
					onClick={handleClickLeft}
					className={classNames(styles.btn, styles.leftBtn)}
				>
					&#10094;
				</button>
				<button 
					style={{visibility: btnRightVis ? 'visible' : 'hidden'}}
					onClick={handleClickRight}
					className={classNames(styles.btn, styles.rightBtn)}
				>
					&#10095;
				</button>
			</div>
			<div className={styles.slider} style={{transform: `translateX(${translate}px)`}}>
				{brands.length 
					? (brands.map((brand, i) => {
						return (
							<div
								key={brand.title} 
								ref={addToRefs}
								className={styles.brand} 
							>
								<div className={styles.wrapper}>
									{/* <a href={`${brand.title}`} className={styles.link}> */}
									<a href='#!' className={styles.link}>
										<img src={brand.image} alt="" />
									</a>
								</div>
							</div>)
						}))
					: (<div>brands</div>)
				}
			</div>
		</div>
	)
}

export {Brands};