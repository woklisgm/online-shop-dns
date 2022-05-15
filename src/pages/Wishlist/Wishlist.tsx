import { useState } from 'react';
import { WishlistTotal } from './WishlistTotal';
import { WishlistBanner } from './WishlistBanner';
import { WishlistFilter } from './WishlistFilter';
import { useActions } from '../../hooks/useActions';
import { MainCard } from '../../components/MainCard';
import { strToNumber } from '../../utils/other/strToNumber';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import classNames from 'classnames';
import styles from './wishlist.module.css';

function Wishlist() {
	const {wish} = useTypedSelector(state => state.wishReducer);
	const [checkedGoods, setCheckedGoods] = useState<typeof wish>([]);

	const {removeFromWish} = useActions();

	const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.checked) {
			setCheckedGoods([...wish]);
			return;
		}
		setCheckedGoods([]);
	}	

	const inCheckedGoods = (name: string): boolean => {
		return checkedGoods.find(el => el.name === name) ? true : false;
	}

	const handleRemoveChecked = () => {
		for (let goods of checkedGoods) {
			removeFromWish(goods.name);
		};
		setCheckedGoods([]);
	}

	const calculateTotalPrice = ():string => {
		if (checkedGoods.length) {
			const reulst = checkedGoods.reduce((p, c) => p + strToNumber(c.price), 0);
			return new Intl.NumberFormat('ru-RU').format(reulst);
		}
		const reulst = wish.reduce((p, c) => p + strToNumber(c.price), 0);
		return new Intl.NumberFormat('ru-RU').format(reulst); // TODO: Intl.NuberFormta to functntion
	}

	const calculateTotalCount = ():number => {
		return checkedGoods.length ? checkedGoods.length : wish.length;
	}

	const handleCheck = (e: React.MouseEvent<HTMLElement>) => {
		let el = e.target as HTMLInputElement;
		if (el.tagName === 'INPUT' && el.checked) {
			const desired = wish.find(goods => goods.name === el.value);
			setCheckedGoods([...checkedGoods, JSON.parse(JSON.stringify(desired))]); // TODO: change JSON.stringify
			return;
		} else if (el.tagName === 'INPUT' && !el.checked) {
			const without = checkedGoods.filter(goods => goods.name !== el.value );
			setCheckedGoods([...without]);
		}
	}

	return (
		<div className={styles.wishlist}>
			<div className={styles.container}>
				<WishlistBanner />
				<div className={styles.body}>
					<WishlistFilter />
					<div className={styles.goods}>
						<WishlistTotal 
							count={calculateTotalCount()} 
							totalPrice={calculateTotalPrice()}
							handleCheckAll={handleCheckAll}
							handleRemoveChecked={handleRemoveChecked}
							allChecked={Boolean(wish.length === checkedGoods.length && checkedGoods.length > 0)} 
						/>
						{wish.map((goods, item) => {
							return (
								// TODO: key -> goods.id 
								// TODO: input value -> goods.id 
								<div key={goods.name} className={styles['goods-wrapper']} onClick={handleCheck}>
									<div className={classNames(styles['check-btn'], styles['goods-check'])}>
										<input 
											type='checkbox' 
											id={goods.name} 
											name='goodsCheck' 
											value={goods.name}
											checked={inCheckedGoods(goods.name)}
										/> 
										<label htmlFor={goods.name} />
									</div>
									<MainCard 
										name={goods.name} 
										image={goods.image} 
										comments={goods.rating.count.toString()} 
										rating={goods.rating.star.toString()} 
										credit={goods.credit}
										price={goods.price}
									/>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export {Wishlist};