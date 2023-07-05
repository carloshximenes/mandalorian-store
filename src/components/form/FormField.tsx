import { InputHTMLAttributes } from 'react';
import './FormField.scss';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

function FormField({ label, className, type = 'text', ...props }: FormFieldProps) {
	return (
		<label className={className}>
			{label}
			<input className="form-field" type={type} {...props} />
		</label>
	);
}

export default FormField;
