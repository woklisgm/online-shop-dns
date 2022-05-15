import { Icon } from '../../../components/Icon';
import styles from './wishlist-banner.module.css';

function WishlistBanner() {
	return (
		<div className={styles.banner}>
			<div className={styles.title}>Обратите внимание!</div>
			<div className={styles.description}>
				Если вы не авторизуетесь, список будет удален в 04:39 13-05-2022. Чтобы сохранить список и иметь к нему доступ с 
				различных устройств, войдите в личный кабинет
			</div>
			<i className={styles.cross}>
				<Icon name='cross' width={13} height={13} />
			</i>
		</div>
	)
}

export {WishlistBanner};