import styles from './info-card.module.css';

interface ILink {
	title: string;
	link: string;
	callback?: () => void;
}

interface IInfoCardProps {
	title: string;
	descriptions: string[],
	links: ILink[]
}

function InfoCard({title, descriptions, links}: IInfoCardProps) {
	return (
		<div className={styles.card }>
			<div className={styles.title}>
				{title}
			</div>
			<div className={styles.description}>
				{descriptions.map((desc, i) => (
					<p key={i}>
						<span>{desc}</span>
					</p>
				))}
			</div>
			<div className={styles.links}>
				{links.map(item => 
					<a key={item.title} href={item.link} onClick={item.callback}>{item.title}</a>
				)}
			</div>
		</div>
	);
}

export {InfoCard};