import styles from './Input.module.scss';

export default function Input({
	type,
	placeholder,
	mode,
	register,
	validation,
	...props
}) {
	return (
		<input
			type={type}
			name={mode}
			id={mode}
			placeholder={placeholder}
			className={styles[mode]}
			// {...(register ? register(name, validation) : null)}
			{...props}
		/>
	);
}
