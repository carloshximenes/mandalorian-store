import { EquipmentProvider } from './providers/EquipmentProvider';
import StoreFilter from './components/StoreFilter';
import StoreList from './components/StoreList';
import './Store.scss';

function Store() {
	return (
		<EquipmentProvider>
			<div className="store">
				<StoreFilter />
				<StoreList />
			</div>
		</EquipmentProvider>
	);
}

export default Store;
