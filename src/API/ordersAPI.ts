import axios from 'axios';
import { defaultApiUrl } from '../constants/urlConstants';
import { Cart } from '../types/cartType';

const cartUrl = `${defaultApiUrl}/orders`;

export const createOrder = async (payload: Cart) => {
	try {
		const { data } = await axios.post<Cart>(cartUrl, payload);
		return data;
	} catch (error) {
		console.log(error);
		return [];
	}
};
