import { Banner } from '../../components/Banner';
import { Brands } from '../../components/Brands';
import { Stories } from '../../components/Stories';
import { GameMenu } from '../../components/GameMenu';
import { InfoCard } from '../../components/InfoCard';
import { Promotions } from '../../components/Promotions';
import { Categories } from '../../components/Categories';
import { Minesweeper } from '../../components/Minesweeper';
import { ActualOffers } from '../../components/ActualOffers';
import { ProductCollection } from '../../components/ProductCollection';

import styles from './home.module.css';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

function Home() {
	const {isShowGame, isShowGameMenu} = useTypedSelector(state => state.appReducer);
	const {showGame} = useActions();

	return (
		<div className={styles.home}>

			{isShowGameMenu ? <GameMenu /> : null}
			{isShowGame ? <Minesweeper /> : null}
			
			<div className={styles.container}>
				<div className={styles.top}>
					<Categories />
					<div className={styles.center}>
						<div className={styles.promotions}>
							<Banner />
							<Promotions />
						</div>
						<div className={styles.actualOffers}>
							<ActualOffers />
						</div>
						<div className={styles.infoCards}>
							<InfoCard 
								title='Привет!'
								descriptions={[
									'Получай бонусы и спецпредложения,',
									'сохраняй и отслеживай заказы'
								]}
								links={[
									{link: '#!', title: 'Перейти в профиль'},
									{link: '#!', title: 'Мои заказы'},
								]} 
							/>
							<InfoCard 
								title='Получай бонусы играя!!'
								descriptions={[
									'Найди все мины и получи бонус',
									'на любую покупку!'
								]}
								links={[
									{link: '#!', title: 'Запустить игру!', callback: showGame },
								]} 
							/>
						</div> 
					</div>
				</div>
				<div className={styles.productCollection}>
					<Brands />
				</div>
				<div className={styles.productCollection}>
					<Stories />
				</div>
				<div className={styles.productCollection}>
					<ProductCollection 
						title='Все для дачи' 
						request='country-house' 
					/>
				</div>
				<div>
					<ProductCollection 
						title='Уход за одеждой' 
						request='clothing-care' 
					/>
				</div>
			</div>
		</div>
	);
}

export {Home};