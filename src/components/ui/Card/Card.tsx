import styles from './card.module.css';

interface ICardProps {
	children: React.ReactNode
}

function Card({children}: ICardProps) {
	return (
		<div className={styles.card}>
			{children}
		</div>
	);
}

export {Card};