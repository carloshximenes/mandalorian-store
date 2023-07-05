import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { Equipment } from '../../../types/equipmentType';
import { Cart } from '../../../types/cartType';
import { CartContext } from '../context/CartContext';
import { postCart } from '../../../redux/actions/cartAction';

type CartProviderProps = {
	children?: ReactNode;
};

const cartInitialState = { name: '', deliveryAddress: '', items: [] };

export function CartProvider({ children }: CartProviderProps) {
	const [cart, setCart] = useState<Cart>(cartInitialState);
	const dispatch = useAppDispatch();

	useEffect(() => console.log(cart), [cart]);

	const addItem = (item: Equipment, quantity?: number) => {
		setCart(prevState => {
			if (prevState) {
				const itemIndex = prevState.items.findIndex(i => i.productId === item.id);
				if (itemIndex >= 0) {
					const newItems = [...prevState.items];
					newItems[itemIndex].quantity += quantity || 1;
					return {
						...prevState,
						items: newItems,
					};
				} else {
					return {
						...prevState,
						items: [...prevState.items, { productId: item.id, quantity: quantity || 1, equipment: item }],
					};
				}
			} else {
				return {
					name: '',
					deliveryAddress: '',
					items: [{ productId: item.id, quantity: quantity || 1, equipment: item }],
				};
			}
		});
	};

	const removeItem = (item: Equipment) => {
		setCart(prevState => {
			if (prevState) {
				const itemIndex = prevState.items.findIndex(i => i.productId === item.id);
				if (itemIndex >= 0) {
					const newItems = [...prevState.items];
					newItems[itemIndex].quantity -= 1;
					if (newItems[itemIndex].quantity <= 0) {
						newItems.splice(itemIndex, 1);
					}
					return {
						...prevState,
						items: newItems,
					};
				}
			}
			return prevState;
		});
	};

	const clearCart = () => setCart(cartInitialState);

	const sendCart = useCallback(async () => {
		const { payload } = await dispatch(postCart(cart));
		clearCart();
		return payload;
	}, [cart, dispatch]);

	const cartProviderValue = useMemo(() => ({ cart, setCart, addItem, removeItem, sendCart, clearCart }), [cart, sendCart]);

	return <CartContext.Provider value={cartProviderValue}>{children}</CartContext.Provider>;
}
