import { Card } from '../ui/Card';
import { CategoryItem } from './CategoryItem';
import styles from './categories.module.css';

function Categories() {
	const categories = [
		{title: 'Бытовая техника', samples: ['для дома', 'уход за собой']},
		{title: 'Смартфоны и гаджеты', 	samples: ['планшеты', 'фототехника']},
		{title: 'ТВ и мультимедиа', samples: ['аудио', 'видеоигры']},
		{title: 'Компьютеры', samples: ['комплектующие', 'ноутбуки']},
		{title: 'Офис и сеть', samples: ['кресла', 'проекторы']},
		{title: 'Отдых и развлечения', samples: ['электросамокаты', 'мангалы']},
		{title: 'Инструменты', samples: ['аккумуляторные', 'садовые']},
		{title: 'Строительство и ремонт', samples: ['электрика', 'сантехника']},
		{title: 'Дом, декор и кухня', samples: ['зоотовары', 'посуда']},
		{title: 'Автотовары', samples: ['звук', 'автокресла']},
		{title: 'Аксессуары и услуги', samples: ['наушники', 'мыши']},
		{title: 'Уцененные товары', samples: []},
	]

	return (
		<Card>
			<ul className={styles.categories}>
				{categories.map(el => <CategoryItem title={el.title} samples={el.samples} /> )}
			</ul>
		</Card>
	);
}

export {Categories};