import classNames from 'classnames';
import styles from './endgame-menu.module.css';
import { useActions } from '../../../hooks/useActions';

interface IVictoryProps {
	resetGame: () => void;
}


// TODO: change buttons style
function Victory({resetGame}: IVictoryProps) {
	const {hideGame} = useActions();

	const handleAgree = () => {
		resetGame();
	}

	const handleRefuse = () => {
		hideGame();
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.panel}>
				<div className={styles.title}>
					Победа!
				</div>
				<div className={styles.buttons}>
					<button 
						onClick={handleAgree}
						className={styles['game-button']}
					>
						Ага, давай!
					</button>
					<button 
						onClick={handleRefuse}
						className={classNames(styles['game-button'], styles.red)}
					>
						Нее
					</button>
				</div>
			</div>
		</div>
	)
}

export {Victory};