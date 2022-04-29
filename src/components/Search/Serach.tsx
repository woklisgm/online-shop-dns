import {useState} from 'react';
import classNames from 'classnames';
import { SearchHistory } from './SearchHistory';
import styles from './search.module.css';

function Search() {
	const [isInputFocus, setInputFocus] = useState(false);
	const [isInputHover, setInputHover] = useState(false);

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

	const inputBlockShadow = {[styles.shadow]: isInputFocus ? true : isInputHover ? true : false }
	const historyBlockShadow = {[styles.hidden]: !isInputFocus};
	
	const inputBlock = classNames(styles.input, inputBlockShadow);
	const historyBlock = classNames(styles.history, historyBlockShadow)

	return(
		<div className={styles.search}>
			<div
				className={inputBlock}
				onMouseEnter={onInputMouseEnter}
				onMouseLeave={onInputMouseLeave}
			>
				<input 
					type="text" 
					placeholder='Поиск по сайту'
					onFocus={onInputFocus}
					onBlur={onInputBlur}
				/>
				<div className={historyBlock}>
					<p className={styles.history_title}>История поиска</p>
					<SearchHistory />
					<p className={styles.history_clear}><span>Очистить историю</span></p>
				</div>
			</div>
		</div>
	)
}

export {Search};