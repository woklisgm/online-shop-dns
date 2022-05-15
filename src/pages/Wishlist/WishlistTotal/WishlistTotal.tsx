import { ColorButton } from '../../../components/ColorButton';
import { Icon } from '../../../components/Icon';
import styles from './wishlist-total.module.css';

interface IWishlistTotalProps {
	count: number;
	totalPrice: string;
	allChecked: boolean;
	handleCheckAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleRemoveChecked: () => void;
} 

function WishlistTotal({count, totalPrice, allChecked, handleCheckAll, handleRemoveChecked}: IWishlistTotalProps) {
	return (
		<div className={styles.total}>
			<div className={styles['total-title']}>
				{count} товар на сумму: {totalPrice} ₽
			</div>
			<div className={styles['total-buttons']}>
				<div className={styles['check-btn']}>
					<input type='checkbox' id='all_goods' name='all_goods' value='all' onChange={handleCheckAll} checked={allChecked} /> 
					<label htmlFor='all_goods'>Выбрать все</label>
				</div>
				<button className={styles['delete-btn']} onClick={handleRemoveChecked} >
					<Icon name='trash' fill='#777' height={20} width={20} />
				</button>
				<div className={styles['buy-btn']}>
					<ColorButton border='orange' color='orange' title='Купить' /> {/* TODO:  */}
				</div>
			</div>
		</div>
	);
}

export {WishlistTotal};