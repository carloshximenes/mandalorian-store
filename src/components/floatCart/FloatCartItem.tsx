import { Equipment } from '../../types/equipmentType';
import QuantityControl from '../quantityControl/QuantityControl';
import './FloatCartItem.scss';

type FloatCartItemProps = {
	equipment?: Equipment;
	quantity: number;
	onAdd: () => void;
	onRemove: () => void;
};

function FloatCartItem({ equipment, quantity, onAdd, onRemove }: FloatCartItemProps) {
	if (!equipment) {
		return null;
	}

	return (
		<div className="float-cart-item">
			<img className="float-cart-item__image" src={equipment.image} />
			<div className="float-cart-item__infos">
				<div className="float-cart-item__name">{equipment.name}</div>
				<div className="float-cart-item__price">
					<span className="float-cart-item__price__value">${equipment.price}</span> each
				</div>
				<QuantityControl value={quantity} onAdd={onAdd} onRemove={onRemove} />
			</div>
		</div>
	);
}

export default FloatCartItem;
