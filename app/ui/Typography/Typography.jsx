import classnames from 'classnames';
import { VARIANTS_MAPPING } from 'utils/constants/typography';
import styles from './Typography.module.scss';

function Typography({ variant, color, children, ...args }) {
	const Component = variant ? VARIANTS_MAPPING[variant] : 'p';
	return (
		<Component
			className={classnames({
				[styles[`typography--variant-${variant}`]]: variant,
				[styles[`typography--color-${color}`]]: color,
			})}
			{...args}
		>
			{children}
		</Component>
	);
}

export default Typography;
