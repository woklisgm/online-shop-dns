import { CategoryItem } from './CategoryItem';
import styles from './categories.module.css';
import { useEffect, useState } from 'react';
import { BASE_MOCK_URL } from '../../constants/baseUrl';


interface ICategory {
	title: string;
	samples: string[];
	icon: string;
}

function Categories() {
	const [isLoading, setIsLoading] = useState(false);
	const [categories, setCategories] = useState<ICategory[]>([]);

	const getCategories = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(`${BASE_MOCK_URL}/categories/`);
			const result = await response.json();

			setCategories(result);
		} catch (e) {
			console.error(e);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		getCategories();
	}, [])

	return (
		<>
			{ categories.length 
				? (<ul className={styles.categories}>
					{categories.map(el => <CategoryItem icon={el.icon} key={el.title} title={el.title} samples={el.samples} /> )}
				   </ul>)
				: null
			}
		</>
	);
}

export {Categories};