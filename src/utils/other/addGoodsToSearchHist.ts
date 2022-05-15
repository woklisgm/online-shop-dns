export const addGoodsToSearchHist = (req: string) => {
	const tmp: string | null = localStorage.getItem('search');
	const arr = tmp ? JSON.parse(tmp) as Array<string>: [];

	if (typeof arr === 'object') {
		const result: Array<string> = [...arr, req];
		if (result.length > 5) {
			localStorage.setItem('search', JSON.stringify(result.slice(1)));
		} else {
			localStorage.setItem('search', JSON.stringify([...result]));
		}
		
	} else {
		localStorage.setItem('search', JSON.stringify([]));
	}
} 