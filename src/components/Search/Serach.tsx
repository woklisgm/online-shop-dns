import {useEffect, useState} from 'react';
import classNames from 'classnames';
import { SearchHistory } from './SearchHistory';
import { addGoodsToSearchHist } from '../../utils/other/addGoodsToSearchHist';
import styles from './search.module.css';

function Search() {
	const [search, setSearch] = useState('');
	const [history, setHistory] = useState<Array<string>>(['iphone', 'samsung', 'bosh']);
	const [isInputFocus, setInputFocus] = useState(false);
	const [isInputHover, setInputHover] = useState(false);

	const updateHistory = () => {
		const oldHistory: string | null = localStorage.getItem('search');
		if (oldHistory && typeof JSON.parse(oldHistory) === 'object') {
			setHistory([...JSON.parse(oldHistory)]);
		}
	}

	const onInputFocus = (e:React.FocusEvent) => {
		setInputFocus(true);
	}	

	const onInputBlur = (e:React.FocusEvent) => {
		setInputFocus(false);
	}	

	const onInputMouseEnter = (e:React.MouseEvent) => {
		setInputHover(true);
	}

	const onInputMouseLeave = (e:React.MouseEvent) => {
		setInputHover(false);
	}

	const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addGoodsToSearchHist(search);
		updateHistory();
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
		setSearch(e.target.value);
	}

	const handleClarHistory = (e: React.MouseEvent<HTMLSpanElement>) => {
		localStorage.setItem('search', JSON.stringify([]));
	}

	const inputBlockShadow = {[styles.shadow]: isInputFocus ? true : isInputHover ? true : false }
	const historyBlockShadow = {[styles.hidden]: !isInputFocus};
	
	const inputBlock = classNames(styles.input, inputBlockShadow);
	const historyBlock = classNames(styles.history, historyBlockShadow)

	useEffect(() => {
		updateHistory();
	}, [])

	return(
		<div className={styles.search}>
			<form
				className={inputBlock}
				onSubmit={handlerSubmit}
				onMouseEnter={onInputMouseEnter}
				onMouseLeave={onInputMouseLeave}
			>
				<input 
					type="text" 
					placeholder='Поиск по сайту'
					onBlur={onInputBlur}
					onFocus={onInputFocus}
					onChange={handleInputChange}
				/>
				<div className={historyBlock}>
					<p className={styles.history_title}>
						История поиска
					</p>
					<SearchHistory show={isInputFocus} history={history} />
					<p className={styles.history_clear}>
						<span onClick={handleClarHistory}>Очистить историю</span>
					</p>
				</div>
			</form>
		</div>
	)
}

export {Search};