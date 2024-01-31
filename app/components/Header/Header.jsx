import { Section } from 'components';
import { Logo, Typography, Button } from 'ui';
import { HEADER } from 'utils/constants/modes';
import { H1, SPAN1, GRAYSCALE_WHITE } from 'utils/constants/variants';
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
					<Button type="button" mode={HEADER}>
							<Typography variant={SPAN1} color={GRAYSCALE_WHITE}>
								Войти
							</Typography>
						</Button>
						<Button type="button" mode={HEADER}>
							<Typography variant={SPAN1} color={GRAYSCALE_WHITE}>
								Регистрация
							</Typography>
						</Button>
					</div>
				</div>
			</Section>
		</header>
	);
}
