import classNames from 'classnames';
import { Icon } from '../../Icon';
import styles from './tile.module.css';

interface ITileProps {
	x: number;
	y: number;
	bomb: boolean;
	number: number;
	state: string;
	leftClick: (x: number, y: number) => void;
	rightClick: (x: number, y: number) => void;
}

function Tile({x, y, bomb, number, state, leftClick, rightClick}: ITileProps) {
	
	const handleLeftClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (state === 'hide') 
			return;
		leftClick(x, y);
	}

	const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		rightClick(x, y);
	}

	const colors = ['#1976d2', '#388e3c', '#d32f2f', '#7b1fa2'];

	const styleTile = classNames(styles.tile, {
		[styles.ligtBrown]: ((x % 2 === 0) && (y % 2 === 0)) || ((x % 2 !== 0) && (y % 2 !== 0)),
		[styles.darkBrown]: ((x % 2 === 0) && (y % 2 !== 0)) || ((x % 2 !== 0) && (y % 2 === 0))
	});

	const styleWrapper = classNames({
		[styles[state]]: true,
		[styles.wrapper]: true,
		[styles.greenLight]: ((x % 2 === 0) && (y % 2 === 0)) || ((x % 2 !== 0) && (y % 2 !== 0)),
		[styles.greenDark]: ((x % 2 === 0) && (y % 2 !== 0)) || ((x % 2 !== 0) && (y % 2 === 0))
	});

	const cell = number < 0 
		? <Icon name='bomb' height={35} width={35} fill={'#363a3d'} />
		: number === 0 
			? '' 
			: <span 
				className={styles.number}
				style={{color: colors[number - 1]}}
			  >
				{number}
			  </span>; 

	
	return (
		<div 
			className={styleTile} 
			onClick={handleLeftClick} 
			onContextMenu={handleRightClick}
		>
			{cell}
			<div className={styleWrapper}>
				{state === 'flag' 
					? <Icon name='flag' height={50} width={50} />
					: null
				}
			</div>	
		</div>

	);
}

export {Tile};