import styles from './category-item.module.css';

interface ICategoryItemProps {
	title: string;
	samples: string[];
}

function CategoryItem({title, samples}: ICategoryItemProps) {
	return (
		<li className={styles.category}>
			<span className={styles.icon}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M4 0C2.89543 0 2 0.89543 2 2V22C2 23.1046 2.89543 24 4 24H20C21.1046 24 22 23.1046 22 22V2C22 0.895431 21.1046 0 20 0H4ZM8 5C8.55234 5 9 4.55234 9 4C9 3.44766 8.55234 3 8 3C7.44781 3 7 3.44766 7 4C7 4.55234 7.44781 5 8 5ZM11 4C11 3.44766 11.4477 3 12 3C12.5523 3 13 3.44766 13 4C13 4.55234 12.5523 5 12 5C11.4477 5 11 4.55234 11 4ZM16 3C15.4477 3 15 3.44766 15 4C15 4.55234 15.4477 5 16 5C16.5522 5 17 4.55234 17 4C17 3.44766 16.5522 3 16 3ZM4 6H20V3C20 2.44772 19.5523 2 19 2H5C4.44772 2 4 2.44772 4 3V6ZM20 21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H20V21ZM17 15C17 17.757 14.7568 20 12 20C9.24296 20 7 17.757 7 15C7 12.243 9.24296 10 12 10C14.7568 10 17 12.243 17 15ZM12 12C13.6541 12 15 13.3459 15 15C15 16.6541 13.6541 18 12 18C10.3457 18 9 16.6541 9 15C9 13.3459 10.3457 12 12 12Z" fill="url(#paint0_linear)"/>
						<defs>
						<linearGradient id="paint0_linear" x1="27.7321" y1="24" x2="27.7321" y2="1.5964e-07" gradientUnits="userSpaceOnUse">
						<stop stop-color="#FC8507"/>
						<stop offset="1" stop-color="#FFA218"/>
						</linearGradient>
					</defs>
				</svg>
			</span>
			<div>
				<p className={styles.title}>{title}</p>
				<p className={styles.types}>
					<span>{samples[0]}</span>
					<span>{samples[1]}</span>
				</p>
			</div>
		</li>
	);
}

export {CategoryItem};