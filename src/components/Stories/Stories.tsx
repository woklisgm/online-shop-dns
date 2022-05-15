import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './stories.module.css';
import { Slyder } from '../Slyder';
import {stories} from '../../constants/stories.js';
import { Story } from './Story';
import { BASE_MOCK_URL } from '../../constants/baseUrl';

interface IStory {
	description: string;
	image: string;
	background: string;
}

interface IStories {
	title: string;
	cards: IStory[];
}

function Stories() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [activeTab, setActiveTab] = useState<string>('');
	const [allStories, setAllStories] = useState<IStories[]>([]); 
	const [cards, setCards] = useState<IStory[]>([]);

	const handleClickTitle = (title: string, cards: any) => {
		setActiveTab(title);
		const currentCards = allStories.find(offer => offer.title === title);
		if (currentCards) {
			setCards([...currentCards.cards]);
		}
	}

	const getStories = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(`${BASE_MOCK_URL}/stories/`);
			const result = await response.json();

			setAllStories(result);
		} catch (e) {
			console.error(e);
		} finally {
			setIsLoading(false);
		}
	}
	
	useEffect(() => {
		if (allStories.length === 0) {
			return;
		}
		setActiveTab(allStories[0].title);
		setCards(allStories[0].cards);
	}, [allStories])

	useEffect(() => {
		getStories();
	}, [])

	// TODO: tabs
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<span>Истории</span>
			</div>
			<div className={styles.body}>
				<div className={styles.tabs}>
					{stories.map((offer, i) => {
						let style = classNames(
								styles.item, {
								[styles.active]: (offer.title === activeTab)
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
					<Slyder mode="one" name={activeTab}>
						{cards.map((card, i) => (
							<Story {...card} key={i} />
						))}
					</Slyder>
				</div>
			</div>
		</div>
	);
}

export {Stories};