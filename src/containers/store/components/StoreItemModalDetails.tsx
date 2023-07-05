import { useState } from 'react';
import { Modal, ModalProps } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Rating from '../../../components/rating/Rating';
import { Equipment } from '../../../types/equipmentType';
import QuantityControl from '../../../components/quantityControl/QuantityControl';
import './StoreItemModalDetails.scss';
import { useCartContext } from '../hooks/useCartContext';

interface MyModalProps extends ModalProps {
	equipment: Equipment;
}

function StoreItemModalDetails({ open, onClose, equipment }: MyModalProps) {
	const { image, isAvailable, description, name, price, rating } = equipment;
	const [quantity, setQuantity] = useState(1);

	const { addItem } = useCartContext();

	const addItemHandler = () => {
		if (!isAvailable) return;
		addItem(equipment, quantity);
	};

	return (
		<Modal open={open} onClose={onClose} center showCloseIcon blockScroll closeOnEsc={false}>
			<div className="store-details">
				<img className="store-details__image" src={image} />
				<div className="store-details__infos">
					<span className="store-details__name">
						{name}
						<Rating value={+rating} className="store-details__rating" />
					</span>
					<span className="store-details__description">{description}</span>
					<span className="store-details__price">
						Price: <span className="store-details__price__value">${price}</span>
					</span>
					<div className="store-details__cart">
						<QuantityControl
							minValue={1}
							maxValue={99}
							value={quantity}
							onAdd={() => setQuantity(q => q + 1)}
							onRemove={() => setQuantity(q => q - 1)}
						/>
						<button
							className="store-details__add-to-cart"
							type="button"
							disabled={!isAvailable}
							onClick={addItemHandler}
						>
							{isAvailable ? 'ADD TO CART' : 'OUT OF STOCK'}
						</button>
					</div>
				</div>
			</div>
		</Modal>
	);
}

export default StoreItemModalDetails;
