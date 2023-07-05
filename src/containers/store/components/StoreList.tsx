import { useEquipmentContext } from '../hooks/useEquipmentContext';
import StoreItem from './StoreItem';
import './StoreList.scss';

function StoreList() {
	const { equipments } = useEquipmentContext();

	if (equipments.length === 0) {
		return <div>No equipment found.</div>;
	}
	return (
		<div className="store-list">
			{equipments.map(equipment => (
				<StoreItem key={equipment.id} {...equipment} />
			))}
		</div>
	);
}

export default StoreList;
