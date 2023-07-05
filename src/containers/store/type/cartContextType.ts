import { Dispatch, SetStateAction } from 'react';
import { Cart } from '../../../types/cartType';
import { Equipment } from '../../../types/equipmentType';

export type CartContextType = {
	cart: Cart;
	setCart: Dispatch<SetStateAction<Cart>>;
	addItem: (equipment: Equipment, quantity?: number) => void;
	removeItem: (equipment: Equipment) => void;
	clearCart: () => void;
	sendCart: () => void;
};
