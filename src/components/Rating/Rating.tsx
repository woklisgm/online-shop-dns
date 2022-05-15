import styles from './rating.module.css';

interface IRatingProps {
	rating: string;
}

function Rating({rating}: IRatingProps) {
	const main = rating.includes('.') ? Number(rating.split('.')[0]) : Number(rating);
	const fraction = rating.includes('.') ? rating.split('.')[1] : 0;

	const stars = new Array(5).fill(null).map((e, i) => {
		if (i < main) {
			return <i className={styles['full-star']}></i>
		}
		if (i === main && fraction > 0) {
			return <i className={styles['half-star']}></i>
		}
		return <i className={styles['empty-star']}></i>
	})

	return (
		<div className={styles.rating}>
			{stars}
		</div>
	);
}

export {Rating}