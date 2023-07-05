import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function StoreLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default StoreLayout;