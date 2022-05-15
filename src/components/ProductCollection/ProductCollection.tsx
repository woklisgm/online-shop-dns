import { useState } from 'react';
import { Tab } from './Tab';
import { Slyder } from '../Slyder';
import { VerticalCard } from '../VerticalCard';
import classNames from 'classnames';
import styles from './product-collection.module.css';

// TODO: вынести
interface IVerticalCardProps {
	name: string;
	image: string;
	rating: string;
	reviews: string;
	price: string;
	credit: string;
}

export interface IData {
	title: string;
	cards: IVerticalCardProps[];
}

type TProductCollection = IData[];

interface IProductCollectionProps {
	collection: TProductCollection;
	request: string;
	title: string;
	background?: boolean;
}

function ProductCollection (props: IProductCollectionProps) {
	const {title, request, collection, background = true} = props;

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [activeTab, setActiveTab] = useState(collection[0].title);
	const [cards, setCards] = useState(collection[0].cards);
	
	const bodyStyle = classNames(styles.body, {[styles.back]: background})

	const handleClickTab = ({title, cards}: IData) => {
		setActiveTab(title);
		setCards(cards);
	}


	

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<span>{title}</span>
			</div>
			<div className={bodyStyle}>
				<div className={styles.tabs}>
					{collection.map((item, i) => 
						<Tab 
							key={item.title} 
							item={item} 
							active={item.title === activeTab} 
							handleClick={handleClickTab}
						/>
					)}
				</div>
				<div className={styles.slyder}>
					<Slyder mode="one" name={activeTab}>
						{cards.map((card, i) => (
							<VerticalCard {...card} key={i} />
						))}
					</Slyder>
				</div>
			</div>
		</div>
	);
}

export {ProductCollection};