import { Main, Section, AuthForm } from 'components';
import { Typography } from 'ui';
import { H2 } from 'utils/constants/variants';
import { SIGNIN } from 'utils/constants/modes';
import styles from "./LoginPage.module.scss";

export default function LoginPage() {
	return (
		<Main>
			<Section>
				<div className={styles['container']}>
					<Typography variant={H2}>Войти в приложение</Typography>
				</div>
			</Section>
			<Section>
				<div className={styles['container']}>
					<AuthForm mode={SIGNIN} />
				</div>
			</Section>
		</Main>
	);
}
