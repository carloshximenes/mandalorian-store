import { ChangeEvent, FormEvent, useState } from 'react';
import { useEquipmentContext } from '../hooks/useEquipmentContext';
import { rating } from '../../../constants/ratingConstant';
import { EquipmentParams } from '../../../types/equipmentParamsType';
import FormField from '../../../components/form/FormField';
import './StoreFilter.scss';
import FormFieldSelect from '../../../components/form/FormFieldSelect';

function StoreFilter() {
	const { setEquipmentParams } = useEquipmentContext();
	const [params, setParams] = useState<EquipmentParams>({
		minRating: String(rating[0]),
		maxRating: String(rating[rating.length - 1]),
	});
	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value, checked } = e.target;
		const val = value === 'on' ? checked : value;
		setParams(prevState => ({ ...prevState, [name]: val }));
	};

	const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;
		setParams(prevState => ({ ...prevState, [name]: value }));
	};

	const searchHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setEquipmentParams(params);
	};

	return (
		<form className="store-filter" onSubmit={searchHandler}>
			<FormField label="Equipment" name="search" className="store-filter__search" onChange={changeHandler} />
			<FormFieldSelect
				label="Min. Rating"
				className="store-filter__min-rating"
				name="minRating"
				options={rating}
				value={params.minRating || rating[0]}
				onChange={selectHandler}
			/>
			<FormFieldSelect
				label="Max. Rating"
				className="store-filter__max-rating"
				name="maxRating"
				options={rating}
				value={params.maxRating || rating[rating.length - 1]}
				onChange={selectHandler}
			/>
			<FormField
				label="Min. Price"
				name="minPrice"
				type="number"
				className="store-filter__min-price"
				onChange={changeHandler}
			/>
			<FormField
				label="Max. Price"
				name="maxPrice"
				type="number"
				className="store-filter__max-price"
				onChange={changeHandler}
			/>
			<button className="store-filter__search-btn" type="submit">
				Search
			</button>
		</form>
	);
}

export default StoreFilter;
