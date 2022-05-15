import classNames from 'classnames';
import { ICollection } from '../ProductCollection';
import styles from './tab.module.css';

interface ITabProps {
	item: ICollection;
	active: boolean;
	handleClick: (title: string) => void;
}

function Tab({item, active, handleClick}: ITabProps) {
	const style = classNames(styles.item, {
		[styles.active]: active
	});

	return (
		<div 
			className={style} 
			onClick={() => handleClick(item.title)}
		>
			{item.title}
		</div>
	);
}

export {Tab}