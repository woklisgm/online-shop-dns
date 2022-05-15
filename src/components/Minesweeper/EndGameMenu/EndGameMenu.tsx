import classNames from 'classnames';
import { useActions } from '../../../hooks/useActions';
import styles from './endgame-menu.module.css';

interface IEndGameMenuProps {
	title: string;
	resetGame: () => void;
}



// TODO: change buttons style
function EndGameMenu({title, resetGame}: IEndGameMenuProps) {
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
					{title}
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

export {EndGameMenu};