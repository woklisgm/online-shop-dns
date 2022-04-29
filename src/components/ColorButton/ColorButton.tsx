import styles from './color-button.module.css';
import classNames from 'classnames';

interface IColorButtonProps {
	title: string;
	border: 'black' | 'orange';
	color: 'black' | 'orange';
}

function ColorButton({title, border, color }: IColorButtonProps) {
	const style = {
		[styles[`text-${color}`]]: true,
		[styles[`border-${border}`]]: true
	}
	const classes = classNames(styles.btn, style);

	return (
		<button className={classes}>Войти</button>
	);
}

export {ColorButton};