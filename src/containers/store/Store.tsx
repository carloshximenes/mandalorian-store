import { EquipmentProvider } from './providers/EquipmentProvider';
import StoreFilter from './components/StoreFilter';
import StoreList from './components/StoreList';
import FloatCart from '../../components/floatCart/FloatCart';
import './Store.scss';

function Store() {
	return (
		<EquipmentProvider>
			<div className="store">
				<StoreFilter />
				<StoreList />
			</div>
			<FloatCart />
		</EquipmentProvider>
	);
}

export default Store;
