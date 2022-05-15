import styles from './promotions.module.css';
import { ColorButton } from '../ColorButton';
import { Icon } from '../Icon';

function Promotions() {
	return (
		<div className={styles.promotions}>
			<div className={styles.header}>
				<span className={styles.title}>Акции</span>
				<Icon name='promotions' height={26}  width={26} fill='#ff860f' />
			</div>
			<div className={styles.types}>
				<a className={styles.type} href="#!">Скидки и предложения <span>5</span></a>
				<a className={styles.type} href="#!">Выгодные комплекты <span>41</span></a>
				<a className={styles.type} href="#!">Скидки и способы оплаты <span>24</span></a>
			</div>
			<div className={styles.buttons}>
				<ColorButton border='orange' title='Все акции' color='orange' />
				<ColorButton border='black' title='Все товары' color='black' />
			</div>
		</div>
	);
}

export {Promotions};