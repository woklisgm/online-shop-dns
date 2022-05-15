import { useEffect, useState } from 'react';
import { Tab } from './Tab';
import { Slyder } from '../Slyder';
import classNames from 'classnames';
import { VerticalCard } from '../VerticalCard';
import styles from './product-collection.module.css';
import { BASE_MOCK_URL } from '../../constants/baseUrl';

// TODO: вынести
interface IVerticalCard {
	name: string;
	image: string;
	rating: string;
	reviews: string;
	price: string;
	credit: string;
}

export interface ICollection {
	title: string;
	cards: IVerticalCard[];
}

interface IProductCollectionProps {
	request: string;
	title: string;
	background?: boolean;
}

function ProductCollection (props: IProductCollectionProps) {
	const {title, request, background = true} = props;

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [activeTab, setActiveTab] = useState<string>('');
	const [allCollections, setAllCollections] = useState<ICollection[]>([]); 
	const [cards, setCards] = useState<IVerticalCard[]>([]);
	
	const bodyStyle = classNames(styles.body, {[styles.back]: background})

	const handleClickTab = (title: string) => {
		setActiveTab(title);
		const currentCards = allCollections.find(offer => offer.title === title);
		if (currentCards) {
			setCards([...currentCards.cards]);
		}
	}

	const getAllCollections = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(`${BASE_MOCK_URL}/${request}/`);
			const result = await response.json();

			setAllCollections(result);
		} catch (e) {
			console.error(e);
		} finally {
			setIsLoading(false);
		}
	}
	
	useEffect(() => {
		if (allCollections.length === 0) {
			return;
		}
		console.log('effect', allCollections);
		console.log('effect', activeTab);
		setActiveTab(allCollections[0].title);
		setCards(allCollections[0].cards);
	}, [allCollections])

	useEffect(() => {
		getAllCollections();
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<span>{title}</span>
			</div>
			<div className={bodyStyle}>
				<div className={styles.tabs}>
					{allCollections.length && allCollections.map((item, i) => 
						<Tab 
							key={item.title} 
							item={item} 
							active={item.title === activeTab} 
							handleClick={handleClickTab}
						/>
					)}
				</div>
				<div className={styles.slyder}>
					{cards.length && 
						<Slyder mode="one" name={activeTab}>
							{cards.map((card, i) => (
								<VerticalCard {...card} key={i} />
							))}
						</Slyder>
					}
				</div>
			</div>
		</div>
	);
}

export {ProductCollection};