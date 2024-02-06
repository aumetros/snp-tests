'use client';
import { useForm } from 'react-hook-form';
import { Form } from 'components';
import { Input, InputError, Button, Typography, Checkbox } from 'ui';
import { AUTH, AUTH_CHECK, ERROR, SIGNUP, SIGNIN } from 'utils/constants/modes';
import { PAR2, BLUE_DEEP } from 'utils/constants/variants';
import { signUpApi, signInApi } from 'utils/actions/auth';
import {
	USER_PH,
	REQUIRED,
	USERNAME_MIN,
	USERNAME_MAX,
	PASS_PH,
	PASS_MIN,
	PASS_CONF,
	PASS_CONF_INVALID,
} from 'utils/constants/messages';
import styles from './AuthForm.module.scss';

export default function AuthForm({ mode }) {
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onChange',
	});

	function onSubmit(data) {
		switch (mode) {
			case SIGNUP:
				signUpApi(data)
					.then((res) => {
						console.log(res);
					})
					.catch((err) => {
						console.log(err.message);
					});
				break;
			case SIGNIN:
				signInApi(data)
					.then((res) => {
						console.log(res);
					})
					.catch((err) => {
						console.log(err.message);
					});
				break;
		}
	}

	return (
		<Form name={mode} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.container}>
				<Input
					type="text"
					name="username"
					placeholder={USER_PH}
					mode={AUTH}
					register={register}
					validation={{
						required: REQUIRED,
						minLength: {
							value: 2,
							message: USERNAME_MIN,
						},
						maxLength: {
							value: 255,
							message: USERNAME_MAX,
						},
					}}
				/>
				<InputError variant={ERROR}>
					{errors.username && errors.username.message}
				</InputError>
				<Input
					type="text"
					name="password"
					placeholder={PASS_PH}
					mode={AUTH}
					register={register}
					validation={{
						required: REQUIRED,
						minLength: {
							value: 6,
							message: PASS_MIN,
						},
					}}
				/>
				<InputError variant={ERROR}>
					{errors.password && errors.password.message}
				</InputError>
				{mode === SIGNUP && (
					<>
						<Input
							type="text"
							name="password_confirmation"
							placeholder={PASS_CONF}
							mode={AUTH}
							register={register}
							validation={{
								required: REQUIRED,
								validate: (val) =>
									watch('password') === val || PASS_CONF_INVALID,
							}}
						/>
						<InputError variant={ERROR}>
							{errors.password_confirmation &&
								errors.password_confirmation.message}
						</InputError>
						<div className={styles['admin']}>
							<div className={styles['admin__container']}>
								<Checkbox
									name="is_admin"
									mode={AUTH_CHECK}
									register={register}
								/>
								<Typography variant={PAR2} color={BLUE_DEEP}>
									Вы являетесь администратором?
								</Typography>
							</div>
						</div>
					</>
				)}

				<Button type="submit" mode={AUTH} disabled={!isValid}>
					{mode === SIGNUP ? 'Зарегистрировать' : 'Войти'}
				</Button>
			</div>
		</Form>
	);
}
