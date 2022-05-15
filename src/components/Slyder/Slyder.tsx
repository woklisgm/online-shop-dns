import React, {useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import styles from './slyder.module.css';
import { getLeftCoordEl, getRightCoordEl } from '../../utils/ui/positonRelativeViewport';

interface ISliders {
	[N: string]: number;
}

function Slyder({mode, children, name}: any) {
	const sliders = useRef<ISliders>({});

	const [translate, setTranslate] = useState(0);
	const [btnLeftVis, setBtnLeftVis] = useState(false);
	const [btnRightVis, setBtnRightVis] = useState(true);
	
	const cardRefs = useRef<Array<HTMLDivElement>>([]);
	const containerRef = useRef<HTMLDivElement>(null);
	
	// const slideMultipleLeft = () => {
	// 	if (!containerRef.current) return;
	// 	const containerCoord = containerRef.current.getBoundingClientRect();
	// 	const firstEl = cardRefs.current[0];

	// 	let penultimateEl = cardRefs.current[0];
	// 	for (let i = 0; i < cardRefs.current.length; i++) {
	// 		const el = cardRefs.current[i];
	// 		const elLeft = getLeftCoordEl(el);

	// 		if (i === 0 && elLeft === containerCoord.left) {
	// 			break;
	// 		}

	// 		if (elLeft < containerCoord.left) {
	// 			penultimateEl = el;
	// 			continue;
	// 		}

	// 		const leftWidth = Math.abs(getLeftCoordEl(firstEl)) + containerCoord.left; 
	// 		const rightWidth = containerCoord.right - Math.abs(getRightCoordEl(penultimateEl));

	// 		setBtnRightVis(true);

	// 		if (leftWidth < rightWidth) {
	// 			setBtnLeftVis(false); 
	// 			setTranslate(0);
	// 		} else {
	// 			const penultimateElRight = penultimateEl.offsetLeft + penultimateEl.offsetWidth;
	// 			setTranslate(-penultimateElRight + containerCoord.right - containerCoord.left);
	// 			if (!btnLeftVis) setBtnLeftVis(true);
	// 		}
	// 		break;
	// 	}
	// }

	// const slideMultipleRight = () => {
	// 	if (!containerRef.current) return;
	// 	const containerCoord = containerRef.current.getBoundingClientRect();
	// 	const lastEl = cardRefs.current[cardRefs.current.length - 1];

	// 	for (let el of cardRefs.current) {
	// 		const elRight = getRightCoordEl(el);

	// 		const leftWidth = getLeftCoordEl(el) - containerCoord.left;
	// 		const rightWidth = getRightCoordEl(lastEl) - containerCoord.right;

	// 		if (elRight > containerCoord.right) {
	// 			const leftOffsetEl = el.offsetLeft;
	// 			const rightOffsetEl = lastEl.offsetLeft + lastEl.offsetWidth;

	// 			setBtnLeftVis(true);

	// 			if (leftWidth < rightWidth ) {
	// 				setTranslate(-leftOffsetEl);
	// 			} else {
	// 				setBtnRightVis(false)
	// 				setTranslate(-rightOffsetEl + containerCoord.right - containerCoord.left);
	// 			}
	// 			break;
	// 		}
	// 		if (!btnRightVis) setBtnRightVis(true);
	// 	}
	// }

	const slideOneLeft = () => {
		if (!containerRef.current) return;
		const containerCoord = containerRef.current.getBoundingClientRect();

		let penultimateEl = cardRefs.current[0];
		for (let i = 0; i < cardRefs.current.length; i++) {
			const el = cardRefs.current[i];
			const elLeft  = getLeftCoordEl(el);

			if (i === 0 && elLeft === containerCoord.left) {
				break;
			}

			if (elLeft < containerCoord.left) {
				penultimateEl = el;
				continue;
			}
			
			const newTranslate = -penultimateEl.offsetLeft
			setTranslate(newTranslate);
			sliders.current[name] = newTranslate;
		}
	}

	const slideOneRight = () => {
		if (!containerRef.current) return;
		const containerCoord = containerRef.current.getBoundingClientRect();
		const containerWidth = containerRef.current.offsetWidth;

		for (let el of cardRefs.current) {
			const elLeft = getLeftCoordEl(el);
			const elRight = getRightCoordEl(el);

			if (elLeft >= containerCoord.right) {
				// console.log(el);

				const rightOffsetEl = el.offsetLeft + el.offsetWidth;
				const newTranslate = -(rightOffsetEl - containerWidth)

				setTranslate(newTranslate);
				setBtnLeftVis(true);
				sliders.current[name] = newTranslate;
				break;
			}
		}
	}

	const handleClickLeft = (e: React.MouseEvent) => {
		slideOneLeft();
	}

	const handleClickRight = (e: React.MouseEvent) => {
		slideOneRight();
	}

	const addToRefs = (el: HTMLDivElement) => {
		if(el && !cardRefs.current.includes(el)) {
			cardRefs.current.push(el);
		}
	}

	useEffect(() => {
		// console.log(sliders.current);
		
		if (!sliders.current[name]) {
			sliders.current[name] = 0;
			setTranslate(0);
		}
		setTranslate(sliders.current[name]);
	}, [children, name])


	return (
		<div className={styles.container} ref={containerRef} > 
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
			<div className={styles.slider} style={{transform: `translateX(${translate}px)`}} >
				{React.Children.map(children, (child, i) => (
					<div className={styles.wrapper} ref={addToRefs}>
						{React.cloneElement(child, {
							...child.props,
							key: i
						})}
					</div>
				))}
			</div>
		</div>
	)
}

export {Slyder};