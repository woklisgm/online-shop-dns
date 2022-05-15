import { removeSpaceFromStr } from './removeSpaceFromStr';

function strToNumber(price: string): number {
	return Number(removeSpaceFromStr(price));
}

export {strToNumber};