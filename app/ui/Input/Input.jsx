import styles from './Input.module.scss';

export default function Input({
	type,
	name,
	placeholder,
	mode,
	register,
	validation,
	...props
}) {
	return (
		<input
			type={type}
			name={name}
			id={name}
			placeholder={placeholder}
			className={styles[mode]}
			// {...(register ? register(name, validation) : null)}
			{...props}
		/>
	);
}
