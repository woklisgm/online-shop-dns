import Icons from './icons.svg';
import styles from './icon.module.css';

interface IIconProps {
	name: string;
	fill?: string;
	width: number;
	classes?: string;
	height: number;
}

function Icon({fill = 'black', height, name, width, classes = ''}: IIconProps) {
	return (
		<svg className={`icon icon-${name} ${classes}`} fill={fill} width={width} height={height} >
			<use xlinkHref={`${Icons}#${name}`} />
		</svg>
	)
}

export {Icon};