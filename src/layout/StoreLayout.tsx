import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { CartProvider } from '../containers/store/providers/CartProvider';

function StoreLayout() {
	return (
		<CartProvider>
			<Header />
			<Outlet />
		</CartProvider>
	);
}

export default StoreLayout;
