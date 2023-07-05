import { Modal, ModalProps } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Rating from '../../../components/rating/Rating';
import { Equipment } from '../../../types/equipmentType';
import './StoreItemModalDetails.scss';

interface MyModalProps extends ModalProps {
	equipment: Equipment;
}

function StoreItemModalDetails({
	open,
	onClose,
	equipment: { image, isAvailable, description, name, price, rating },
}: MyModalProps) {
	return (
		<Modal open={open} onClose={onClose} center showCloseIcon blockScroll closeOnEsc={false}>
			<div className="store-details">
				<img className="store-details__image" src={image} />
				<div className="store-details__infos">
					<span className="store-details__name">
						{name} (<Rating value={+rating} className="store-details__rating" />)
					</span>
					<span className="store-details__description">{description}</span>
					<span className="store-details__price">
						Price: <span className="store-details__price__value">${price}</span>
					</span>
					<button className="store-details__add-to-cart" type="button" disabled={!isAvailable}>
						{isAvailable ? 'ADD TO CART' : 'OUT OF STOCK'}
					</button>
				</div>
			</div>
		</Modal>
	);
}

export default StoreItemModalDetails;
