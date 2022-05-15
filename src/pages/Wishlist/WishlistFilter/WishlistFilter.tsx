import { Icon } from '../../../components/Icon';
import styles from './wishlist-filter.module.css';

function WishlistFilter() {

	const handlerHeaderClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		let el = e.currentTarget;
		
		const body = el.nextElementSibling as HTMLDivElement;
		
		if (parseInt(body.style.maxHeight)) {
			el.classList.remove(styles.active);
			body.style.maxHeight = '0';
			body.style.opacity = '0';
		} else {
			el.classList.add(styles.active);
			body.style.maxHeight = body.scrollHeight + 'px';
			body.style.opacity = '1';
		}
	}
	
	return (
		<div className={styles.filters}>
			{/* Sort */}
			<div className={styles.filter} >
				<button className={styles.header} onClick={handlerHeaderClick}>
					<Icon name='arrow-down' width={24} height={24} />
					<span>Сортировка</span>
				</button>	
				<div className={styles.body}>
					<div className={styles.radio}>
						<input id="descending" type="radio" name="sort" /> 
						<label htmlFor="descending">По убыванию цены</label>
					</div>
					<div className={styles.radio}>
						<input id="ascending" type="radio" name="sort" /> 
						<label htmlFor="ascending">По убыванию цены</label>
					</div>
					<div className={styles.radio}>
						<input id="date" type="radio" name="sort" defaultChecked /> 
						<label htmlFor="date">По дате добавления</label>
					</div>
				</div>
			</div>
			{/* Category */}
			<div className={styles.filter} >
				<button className={styles.header} onClick={handlerHeaderClick}>
					<Icon name='arrow-down' width={24} height={24} />
					<span>Категории</span>
				</button>	
				<div className={styles.body}>
					<div className={styles.checkbox}>
						<input id="cat1" type="checkbox" defaultChecked/> 
						<label htmlFor="cat1">Категория 1</label>
					</div>
					<div className={styles.checkbox}>
						<input id="cat2" type="checkbox" defaultChecked /> 
						<label htmlFor="cat2">Категория 2</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export {WishlistFilter};

