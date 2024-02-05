import cn from 'classnames';
import styles from './Button.module.scss';

export default function Button({ children, type, mode, disabled, ...args }) {
	return (
		<button
			type={type}
			className={cn(styles[mode], {
				[styles.disable]: disabled,
			})}
			disabled={disabled}
			{...args}
		>
			{children}
		</button>
	);
}
