import { useMemo, useState } from 'react';
import { useCartContext } from '../../containers/store/hooks/useCartContext';
import { Modal } from 'react-responsive-modal';
import FloatCartItem from './FloatCartItem';
import './FloatCart.scss';

function FloatCart() {
	const [showCart, setShowCart] = useState(false);
	const [showDeliveryOption, setShowDeliveryOption] = useState(false);
	const [orderSent, setOrderSent] = useState(false);
	const { cart, setCart, addItem, removeItem, clearCart, sendCart } = useCartContext();

	const amount = useMemo(
		() => cart.items.reduce((acc, item) => acc + +(item.equipment?.price || 0) * item.quantity, 0),
		[cart],
	);
	const itemCount = useMemo(() => cart.items.reduce((acc, item) => acc + item.quantity, 0), [cart]);

	const canOrder = useMemo(() => cart.name.length > 0 && cart.deliveryAddress.length > 0, [cart]);

	const clearCartHandler = () => {
		if (amount > 0) clearCart();
		setShowCart(false);
	};

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setCart(prev => ({ ...prev, [name]: value }));
	};

	const orderHandler = () => {
		if (!canOrder) {
			setShowDeliveryOption(true);
			return;
		}
		sendCart();
		setShowCart(false);
		setShowDeliveryOption(false);
		setOrderSent(true);
	};

	return (
		<>
			<div className="float-cart" onClick={() => setShowCart(true)}>
				<i className="fas fa-shopping-cart float-cart__cart-icon"></i>
				<span className="float-cart__item-count">{itemCount}</span>
			</div>
			<Modal open={showCart} onClose={() => setShowCart(false)} center showCloseIcon blockScroll closeOnEsc={false}>
				<div className="float-cart__modal">
					<h1>Cart</h1>
					<div className="float-cart__list">
						{cart.items.map(({ productId, equipment, quantity }) => (
							<FloatCartItem
								key={productId}
								equipment={equipment}
								quantity={quantity}
								onAdd={() => equipment && addItem(equipment)}
								onRemove={() => equipment && removeItem(equipment)}
							/>
						))}
						{cart.items.length === 0 && <div className="float-cart__empty">Your cart is empty</div>}
					</div>
					<h2 className="float-cart__total">Total: ${amount}</h2>
					{showDeliveryOption && (
						<div className="float-cart__delivery-info">
							<input
								name="name"
								className="float-cart__delivery-info__name"
								type="text"
								placeholder="Your name"
								required
								onChange={inputHandler}
							/>
							<input
								name="deliveryAddress"
								className="float-cart__delivery-info__address"
								type="text"
								placeholder="Delivery Address"
								required
								onChange={inputHandler}
							/>
						</div>
					)}
					<div className="float-cart__actions">
						{amount > 0 && (
							<button type="button" className="float-cart__order" onClick={orderHandler}>
								{!canOrder ? 'CREATE ORDER' : 'ORDER NOW'}
							</button>
						)}
						<button type="button" className="float-cart__clear" onClick={clearCartHandler}>
							{amount > 0 ? 'CLEAR CART' : 'CLOSE'}
						</button>
					</div>
				</div>
			</Modal>
			<Modal open={orderSent} onClose={() => setOrderSent(false)} center showCloseIcon blockScroll closeOnEsc={false}>
				<h3 className="float-cart__order-sent">Order has been sent. Thank you for your order!</h3>
			</Modal>
		</>
	);
}

export default FloatCart;
