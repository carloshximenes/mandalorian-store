import './QuantityControl.scss';

type QuantityControlProps = {
	value: number;
	minValue?: number;
	maxValue?: number;
	onAdd: () => void;
	onRemove: () => void;
};

function QuantityControl({ value, minValue, maxValue, onAdd, onRemove }: QuantityControlProps) {
	return (
		<div className="quantity-control">
			<button className="quantity-control__button" onClick={onAdd} disabled={value === maxValue}>
				+
			</button>
			<input className="quantity-control__value" type="number" readOnly value={value} />
			<button className="quantity-control__button" onClick={onRemove} disabled={value === minValue}>
				-
			</button>
		</div>
	);
}

export default QuantityControl;
