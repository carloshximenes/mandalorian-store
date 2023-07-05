import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const useCartContext = () => {
	const { ...props } = useContext(CartContext);
	return { ...props };
};
