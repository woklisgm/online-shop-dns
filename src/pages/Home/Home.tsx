import { Categories } from '../../components/Categories';
import { Card } from '../../components/ui/Card';
import styles from './home.module.css';

function Home() {
	return (
		<div className={styles.home}>
			<div className={styles.container}>
				<div className={styles.top}>
					<Categories />
					<div className="center">
						<div className="actions">
							Акции
						</div>
						<div className="actual-offers">
							Актуальные предложения
						</div>
						<div className="discounts">
							Скидки
						</div>
					</div>
				</div>
				<div className="brands">Бренды</div>
				<div className="history">Истории</div>
				<div className="offers">Все для дачи</div>
				<div className="offers">Уход за одеждой</div>
				<div className="cards">Карточки</div>
				<div className="viewed">Вы недавно смотрели</div>
			</div>
		</div>
	);
}

export {Home};