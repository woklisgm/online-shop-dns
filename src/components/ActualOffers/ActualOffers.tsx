import React, { useEffect, useState } from 'react';
import { Cards } from './Cards';
import classNames from 'classnames';
import styles from './actual-offers.module.css';
import { BASE_MOCK_URL } from '../../constants/baseUrl';
// import {offers} from '../../constants/actualOffers';

interface IOffer {
	// id: string;
	image: string;
	name: string;
	price: string;
}

interface IOffers {
	title: string;
	cards: IOffer[];
}

function ActualOffers() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [activeOffers, setActiveOffers] = useState<string>('');
	const [allOffers, setAllOffers] = useState<IOffers[]>([]); // offers[0].cards
	const [cards, setCards] = useState<IOffer[]>([]);

	const handleClickTitle = (title: string, cards: any) => {
		setActiveOffers(title);
		const currentCards = allOffers.find(offer => offer.title === title);
		if (currentCards) {
			setCards([...currentCards.cards]);
		}
	}

	const getOffers = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(`${BASE_MOCK_URL}/actual-offers/`);
			const result = await response.json();

			setAllOffers(result);
		} catch (e) {
			console.error(e);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		if (allOffers.length === 0) {
			return;
		}
		setActiveOffers(allOffers[0].title);
		setCards(allOffers[0].cards);
	}, [allOffers])

	useEffect(() => {
		getOffers();
	}, [])

	return (
		<div className={styles.container}>
			{ !allOffers.length 
				? null
				: (<>
					<div className={styles.title}>
						<span>Актуальные предложения</span>
					</div>
					<div className={styles.body}>
						<div className={styles.tabs}>
							{allOffers.length && allOffers.map((offer, i) => {
								let style = classNames(
										styles.item, {
										[styles.active]: (offer.title === activeOffers)
									});
								return (
									<div 
										key={offer.title}
										className={style} 
										onClick={() => handleClickTitle(offer.title, offer.cards)}
									>
										{offer.title}
									</div>
								)
							} )}
						</div>
						<div className={styles.slyder}>
							<Cards cards={cards} visibleCount={3} />
						</div>
					</div>	
				</>)
			}
		</div>
	);
}

export {ActualOffers};