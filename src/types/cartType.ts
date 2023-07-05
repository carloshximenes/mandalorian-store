import { Equipment } from './equipmentType';

type Items = {
	productId: string;
	quantity: number;
	equipment?: Equipment;
};

export type Cart = {
	name: string;
	deliveryAddress: string;
	items: Items[];
};
