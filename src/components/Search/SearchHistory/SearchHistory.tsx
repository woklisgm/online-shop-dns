import classNames from 'classnames';
import styles from './search-history.module.css';

interface ISearchHistoryProps {
	show: boolean;
	history: Array<string>;
}

function SearchHistory({show, history}: ISearchHistoryProps) {
	const classes = classNames(styles.list, {[styles.active]: show});

	return (
		<ul className={classes} >
			{history.map((request, i) => <li key={i} className={styles.item}>{request}</li>)}
		</ul>
	)
}

export {SearchHistory};