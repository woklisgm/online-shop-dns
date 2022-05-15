import styles from './banner.module.css';
import banner from '../../assets/images/banner.jpg';

function Banner() {
	return (
		<div className={styles.banner}>
			<div className={styles.wrapper}>
				<img src={banner} height="220" width="580" alt="banner" />
			</div>
		</div>
	);
}

export {Banner};