import styles from './Checkbox.module.scss';

export default function Checkbox({ mode, name, ...props }) {
	return (
		<label className={styles[`label-${mode}`]} htmlFor={name}>
			<input
				className={styles.checkbox}
				type="checkbox"
				name={name}
				// value={value}
				id={name}
				// disabled={disabled}
				// {...(register ? register(name, validation) : null)}
				{...props}
			/>
			<span className={styles[`pseudo-${mode}`]}></span>
		</label>
	);
}
