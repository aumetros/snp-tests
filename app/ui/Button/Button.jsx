import styles from "./Button.module.scss";

export default function Button({ children, type, mode, ...args }) {
	return (
		<button type={type} className={styles[mode]} {...args}>
			{children}
		</button>
	);
}
