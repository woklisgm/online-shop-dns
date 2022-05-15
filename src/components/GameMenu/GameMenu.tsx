import { Icon } from '../Icon';
import classNames from 'classnames';
import styles from './game-menu.module.css';
import { useActions } from '../../hooks/useActions';

function GameMenu() {
	const {showGame, hideGame, hideGameMenu} = useActions();

	const handleRefuse = () => {
		hideGame();
		hideGameMenu();
	}

	const handleAgree = () => {
		hideGameMenu();
		showGame();
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles['game-menu']}>
				<button 
					onClick={handleRefuse}
					className={styles['close']}
				>
					<Icon name='cross-bold' height={18} width={18} fill='#fff' />
				</button>
				<div className={styles['info-panel']}>
					<div className={styles.description}>
						Пройди игру и получи скидку 20% на любой товар
					</div>
					<div className={styles.image}>
						<img src={'https://i.imgur.com/iFwI4UM.png'} alt="" width={150} height={150} />
					</div>
					<div className={styles.buttons}>
						<button 
							onClick={handleAgree}
							className={styles['game-button']}
						>
							Хочу скидку!
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
		</div>
	)
}
export {GameMenu};