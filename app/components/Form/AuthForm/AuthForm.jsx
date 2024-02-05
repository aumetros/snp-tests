import { Form } from 'components';
import { Input, InputError, Button, Typography, Checkbox } from 'ui';
import { AUTH, AUTH_CHECK, ERROR, SIGNUP } from 'utils/constants/modes';
import { PAR2, BLUE_DEEP } from 'utils/constants/variants';
import styles from './AuthForm.module.scss';

export default function AuthForm({ mode }) {
	return (
		<Form name={mode}>
			<div className={styles.container}>
				<Input
					type="text"
					name="username"
					placeholder={'Введите имя пользователя'}
					mode={AUTH}
				/>
				<InputError variant={ERROR}></InputError>
				<Input
					type="text"
					name="password"
					placeholder={'Введите пароль'}
					mode={AUTH}
				/>
				<InputError variant={ERROR}></InputError>
				{mode === SIGNUP && (
					<>
						<Input
							type="text"
							name="password_confirmation"
							placeholder={'Повторите пароль'}
							mode={AUTH}
						/>
						<InputError variant={ERROR}></InputError>
						<div className={styles['admin']}>
							<div className={styles['admin__container']}>
								<Checkbox name="is_admin" mode={AUTH_CHECK} />
								<Typography variant={PAR2} color={BLUE_DEEP}>
									Вы являетесь администратором?
								</Typography>
							</div>
							<InputError variant={ERROR}></InputError>
						</div>
					</>
				)}

				<Button type="submit" mode={AUTH}>
					{mode === SIGNUP ? 'Зарегистрировать' : 'Войти'}
				</Button>
			</div>
		</Form>
	);
}
