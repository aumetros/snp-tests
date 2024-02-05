import { Main, Section, AuthForm } from 'components';
import { Typography } from 'ui';
import { H2 } from 'utils/constants/variants';
import { SIGNUP } from 'utils/constants/modes';
import styles from './RegisterPage.module.scss';

export default function RegisterPage() {
	return (
		<Main>
			<Section>
				<div className={styles['title-container']}>
					<Typography variant={H2}>Регистрация</Typography>
				</div>
			</Section>
			<Section>
				<AuthForm mode={SIGNUP} />
			</Section>
		</Main>
	);
}
