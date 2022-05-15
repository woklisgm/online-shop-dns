export interface IGoods {
	"productId": string,
	name: string;
	nameTranslate: string;
	price: string;
	credit: string;
	brandName: string;
	images: string[];
	image: string;
	category: {
		id: string;
		name: string;
	},
	description: string;
	modelName: string;
	groups: string[];
	rating: {
		star: number;
		count: number;
	}
	// properties: {
		
	// }[]

}