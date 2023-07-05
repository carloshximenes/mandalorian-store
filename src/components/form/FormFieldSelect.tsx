import './FormFieldSelect.scss';

interface FormFieldSelectProps {
	label?: string;
	className: string;
	options: string[] | number[];
	value: string | number;
	name: string;
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function FormFieldSelect({ name, label, className, options, value, onChange }: FormFieldSelectProps) {
	return (
		<label className={className}>
			{label}
			<select name={name} className="form-field-select" value={value} onChange={onChange}>
				{options.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</label>
	);
}

export default FormFieldSelect;
