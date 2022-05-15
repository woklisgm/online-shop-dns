import { Icon } from '../../Icon';
import styles from './category-item.module.css';

interface ICategoryItemProps {
	title: string;
	samples: string[];
	icon: string;
}

function CategoryItem({title, samples, icon}: ICategoryItemProps) {
	return (
		<li className={styles.category}>
			<span className={styles.icon}>
				<Icon name={icon} height={24} width={24} />
			</span>
			<div className={styles.body}>
				<a href='#!' className={styles.title}>{title}</a>
				<div className={styles.types}>
					<span>{samples[0]}</span>
					<span>{samples[1]}</span>
				</div>
			</div>
		</li>
	);
}

export {CategoryItem};