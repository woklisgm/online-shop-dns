import { CartModalGoods } from './CartModalGoods';
import { useActions } from '../../hooks/useActions';
import { strToNumber } from '../../utils/other/strToNumber';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './cart-modal.module.css';


function CartModal() {
	const {cart} = useTypedSelector(state => state.cartReducer);
	
	const {clearCart} = useActions();

	const total = cart.reduce((sum, current) => 
		(sum + (strToNumber(current.price) * current.count)), 0);

	return (
		<div className={styles.container}>
			<div className={styles.body}>
				<div className={styles.header}>
					<div className={styles.title}>
						Основные товары {cart.length}
					</div>
					<div className={styles['clear-list']} onClick={clearCart}>
						Очистить список
					</div>
				</div>
				<div className={styles['goods-list']}>
					{!cart.length 
						? <div className={styles['empty-cart']}>
							Добавьте что-нибудь в корзину
						  </div>
						: null
					}
					{cart.map(goods => (
						<CartModalGoods 
							name={goods.name} 
							image={goods.image} 
							price={goods.price} 
						/>
					))}
				</div>
			</div>
			<div className={styles.footer}>
				<div className={styles.total}>
					<span>Итого:</span>
					<span>{new Intl.NumberFormat('ru-RU').format(total)} ₽</span>
				</div>
				<div className={styles.buttons}>
				</div>
			</div>
		</div>
	)
}

export {CartModal};