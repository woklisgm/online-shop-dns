import styles from './search-history.module.css';

function SearchHistory() {
	const requests = ['iphone13', 'samsung m12', 'ginzuu', 'наушники'];

	return (
		<ul className={styles.list}>
			{requests.map(request => <li className={styles.item}>{request}</li>)}
		</ul>
	)
}

export {SearchHistory};