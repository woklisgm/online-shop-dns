import { useState } from 'react';

interface ISliders {
	[N: string]: number;
}

export const useSomeSlider = () => {
	const [sliders, setSliders] = useState<ISliders>({});

	const getSlider = (name: string): number => {
		if (name in sliders) {
			return sliders[name];
		}
		setSliders({...sliders, [name]: 0});
		return 0;
	}

	const setSlider = (name: string, value: number): void => {
		setSliders({...sliders, [name]: value});
	}

	return [getSlider, setSlider];
}