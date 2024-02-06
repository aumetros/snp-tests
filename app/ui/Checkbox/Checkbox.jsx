import styles from './Checkbox.module.scss';

export default function Checkbox({ mode, name, register, ...props }) {
	return (
		<label className={styles[`label-${mode}`]} htmlFor={name}>
			<input
				className={styles.checkbox}
				type="checkbox"
				name={name}
				id={name}
				{...(register ? register(name) : null)}
				{...props}
			/>
			<span className={styles[`pseudo-${mode}`]}></span>
		</label>
	);
}
