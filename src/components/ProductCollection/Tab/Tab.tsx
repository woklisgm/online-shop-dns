import { IData } from '../ProductCollection';
import classNames from 'classnames';
import styles from './tab.module.css';

interface ITabProps {
	item: IData;
	active: boolean;
	handleClick: (item: IData) => void;
}

function Tab({item, active, handleClick}: ITabProps) {
	const style = classNames(styles.item, {
		[styles.active]: active
	});

	return (
		<div 
			className={style} 
			onClick={() => handleClick(item)}
		>
			{item.title}
		</div>
	);
}

export {Tab}