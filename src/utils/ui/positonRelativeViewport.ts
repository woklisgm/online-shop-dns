export const getRightCoordEl = (el: HTMLDivElement):number => {
	return el.getBoundingClientRect().right;
}

export const getLeftCoordEl = (el: HTMLDivElement):number => {
	return el.getBoundingClientRect().left;
}

