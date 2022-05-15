import { useEffect, useRef, useState } from 'react';
import { EndGameMenu } from './EndGameMenu';
import styles from './minesweeper.module.css';
import { Tile } from './Tile';

function Minesweeper() {
	enum TILES {
		SHOW = 'show',
		HIDE = 'hide',
		FLAG = 'flag',
	}

	const BOMB = -1;
	const fieldSize = 8;
	const difficulty = 0.2;
	const tileSize = 70;
	let bombCount = 0;

	const [gameOver, setGameOver] = useState(false);
	const [gameMap, setGameMap] = useState<Array<Array<number>>>(
		new Array(fieldSize).fill([]).map(() => new Array(fieldSize).fill(0))	
	);
	
	const [gameTiles, setGameTiles] = useState<Array<Array<string>>>(
		new Array(fieldSize).fill([]).map(() => new Array(fieldSize).fill(TILES.SHOW))
	);

	const mineswepperRef = useRef<HTMLDivElement>(null);
	mineswepperRef.current?.style.setProperty('--board-size', `${fieldSize * tileSize}px`);	

	// AUDIO 
	let audioTileOpen = new Audio('https://woklis.ucoz.net/static/open-tail.wav');
	let audioBomb = new Audio('https://woklis.ucoz.net/static/duck.mp3');

	const playTileOpen = () => {
		audioTileOpen.play();
	}

	const playBomb = () => {
		audioBomb.play();
	}

	const getVisibleTiles = () => {
		let count = 0;
		gameTiles.forEach(row => row.forEach(tile => {
			if (tile === TILES.SHOW)
				count += 1;
		}));

		return count;
	}

	const handleLeftClick = (x: number, y: number) => {
		if (gameTiles[x][y] === TILES.FLAG)
			return;
		
		if (gameMap[x][y] === BOMB) {
			playBomb();
			gameTiles[x][y] = TILES.HIDE;
			setGameTiles(Array.from(gameTiles));
			lostGame();
			return;
		}
		if (gameMap[x][y] !== 0) {
			playTileOpen();
			gameTiles[x][y] = TILES.HIDE;
			setGameTiles(Array.from(gameTiles));
			return;
		}

		checkEmptyCells(x, y);
	}

	const handleRightClick = (x: number, y: number) => {
		if (gameTiles[x][y] === TILES.HIDE) 
			return;
		
		gameTiles[x][y] = gameTiles[x][y] === 'show' ? TILES.FLAG : TILES.SHOW;
		setGameTiles(Array.from(gameTiles));
	}
	
	const handleNewGame = () => {
		setGameOver(false);
		newGame();
	}

	const initGameMap = () => {
		let x = 0;
		let y = 0;
		let tmpArr: Array<Array<number>> = new Array(fieldSize).fill([]).map(() => new Array(fieldSize).fill(0));
		for (let i = 0; i < fieldSize * fieldSize; i++) {
			let bomb = Math.random() < difficulty;
			if (bomb) {
				bombCount += 1;
				tmpArr[x][y] = -1;

				if (x > 0) {
					if (tmpArr[x-1][y] !== BOMB) {
						tmpArr[x-1][y] = tmpArr[x-1][y] + 1;
					}
				}

				if (x < fieldSize - 1) {
					if (tmpArr[x+1][y] !== BOMB)
						tmpArr[x+1][y] = tmpArr[x+1][y] + 1;
				} 

				if (y > 0) {
					if (tmpArr[x][y-1] !== BOMB)
						tmpArr[x][y-1] = tmpArr[x][y-1] + 1;
				}

				if (y < fieldSize - 1) {
					if (tmpArr[x][y+1] !== BOMB)
						tmpArr[x][y+1] = tmpArr[x][y + 1] + 1;
				}

				if (x > 0 && y > 0) {
					if (tmpArr[x-1][y-1] !== BOMB)
						tmpArr[x-1][y-1] = tmpArr[x-1][y-1] + 1;
				}
				
				if ((x < fieldSize - 1) && (y < fieldSize - 1)) {
					if (tmpArr[x+1][y+1] !== BOMB)
					tmpArr[x+1][y+1] = tmpArr[x+1][y+1] + 1;
				}

				if (y > 0 && (x < fieldSize - 1)) {
					if (tmpArr[x+1][y-1] !== BOMB)
						tmpArr[x+1][y-1] = tmpArr[x+1][y-1] + 1;
				} 
							
				if (x > 0 && (y < fieldSize - 1)) {
					if (tmpArr[x-1][y+1] !== BOMB)
						tmpArr[x-1][y+1] = tmpArr[x-1][y+1] + 1;
				}
			}

			x += 1;
			if (x >= fieldSize) {
				x = 0;
				y += 1;
			}
		};

		return tmpArr;
	}
	
	const newGame = () => {
		setGameMap(Array.from(initGameMap()));
		setGameTiles(new Array(fieldSize).fill([]).map(() => new Array(fieldSize).fill(TILES.SHOW)))
	}

	const lostGame = () => {
		setGameOver(true);
	}

	const checkEmptyCells = (x: number, y: number) => {
		let tmpArr = Array.from(gameTiles);

		const checkCell = (x: number, y: number) => {
			if (tmpArr[x][y] === TILES.HIDE) {
				return;
			}

			tmpArr[x][y] = TILES.HIDE;
			if (gameMap[x][y] !== 0) {
				tmpArr[x][y] = TILES.HIDE;
				return;
			}

			if (x > 0) {
				checkCell(x - 1, y);
			}
			
			if (x < fieldSize - 1) {
				checkCell(x + 1, y);
			}

			if (y > 0) {
				checkCell(x, y - 1);
			}

			if (y < fieldSize - 1) {
				checkCell(x, y + 1);
			}

			if (x > 0 && y > 0) {
				checkCell(x - 1, y - 1);
			}
			
			if ((x < fieldSize - 1) && (y < fieldSize - 1)) {
				checkCell(x + 1, y + 1);
			}
			
			if (y > 0 && (x < fieldSize - 1)) {
				checkCell(x + 1, y - 1);
			} 
						
			if (x > 0 && (y < fieldSize - 1)) {
				checkCell(x - 1, y + 1);
			}
		}

		checkCell(x, y);

		playTileOpen();
		setGameTiles(Array.from(tmpArr));
	}

	useEffect(() => {
		setGameMap(Array.from(initGameMap()));
	}, []);

	useEffect(() => {
		if (getVisibleTiles() === bombCount) {
			alert("ПОБЕДА");
		}
	}, [gameTiles])

	return (
		<div className={styles.wrapper} >
			{gameOver 
				? <EndGameMenu title={'Упс, может попробуешь еще раз?'} resetGame={handleNewGame} />
				: null
			}

			<div 
				ref={mineswepperRef} 
				className={styles.mineswepper}
			> 
				{gameMap.map((row, i) => 
					row.map((cell, j) => 
						<Tile 
							x={i}
							y={j}
							number={cell}
							bomb={cell === BOMB} 
							state={gameTiles[i][j]}
							leftClick={handleLeftClick}
							rightClick={handleRightClick}
						/>
					)
				)}
			</div>
		</div>
	)
}

export {Minesweeper};