import { createHashRouter } from 'react-router-dom';

import StoreLayout from '../layout/StoreLayout';
import Store from '../containers/store/Store';

export const router = createHashRouter([
	{
		path: '/',
		element: <StoreLayout />,
		children: [
			{
				index: true,
				element: <Store />,
			},
		],
	},
]);
