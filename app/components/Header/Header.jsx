import { Section, Navigation } from 'components';
import { Logo, Typography } from 'ui';
import { HEADER } from 'utils/constants/modes';
import { H1 } from 'utils/constants/variants';
import styles from './Header.module.scss';

export default function Header() {
	return (
		<header className={styles.root}>
			<Section>
				<div className={styles.container}>
					<div className={styles['logo-container']}>
						<Logo mode={HEADER} />
						<Typography variant={H1}>Test Yourself</Typography>
					</div>
					<div className={styles['buttons-container']}>
						<Navigation />
					</div>
				</div>
			</Section>
		</header>
	);
}
