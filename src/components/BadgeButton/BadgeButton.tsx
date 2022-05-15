import { Icon } from '../Icon';
import styles from './badge-button.module.css';

interface IBadgeButtonProps {
	title: string;
	badge: number;
};

function BadgeButton({title, badge}: IBadgeButtonProps) {
	return (
		<span className={styles.button} >
			{badge ? <span className={styles.badge}>{badge}</span> : null}
			
			<i className={styles.icon}>
				{title === 'Избранное' 
					? <Icon name='heart' height={20} width={20} />
					: null
				}
				{title === 'Корзина' 
					? <Icon name='cart' height={22} width={22} />
					: null
				}
			</i>
			<span>{title}</span>
		</span>
	);
}

export {BadgeButton};