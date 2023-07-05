import { useState } from 'react';
import Rating from '../../../components/rating/Rating';
import { Equipment } from '../../../types/equipmentType';
import StoreItemModalDetails from './StoreItemModalDetails';
import { useCartContext } from '../hooks/useCartContext';
import './StoreItem.scss';

type StoreItemProps = Equipment;

function StoreItem({ ...props }: StoreItemProps) {
	const { name, image, price, isAvailable, rating } = props;
	const [showDetails, setShowDetails] = useState(false);

	const { addItem } = useCartContext();

	const addItemHandler = () => {
		if (!isAvailable) return;
		addItem(props, 1);
	};

	return (
		<>
			<div className="store-item">
				{!isAvailable && <span className="store-item__out-of-stock">Out of stock</span>}
				<img className="store-item__image" src={image} onClick={() => setShowDetails(true)} alt={name} />
				<div className="store-item__infos">
					<span className="store-item__price">${price}</span>
					<Rating className="store-item__rating" value={+rating} />
					<span className="store-item__name">{name}</span>
				</div>
				<button className="store-item__add-to-cart" type="button" disabled={!isAvailable} onClick={addItemHandler}>
					ADD TO CART
				</button>
			</div>
			<StoreItemModalDetails equipment={props} open={showDetails} onClose={() => setShowDetails(false)} />
		</>
	);
}

export default StoreItem;
