import { Form } from 'components';
import { Input } from 'ui';
import styles from './AuthForm.module.scss';

export default function AuthForm({ mode }) {
	return (
		<Form name={mode}>
			<div className={styles.container}>
				<Input
					type="text"
					placeholder={'Введите имя'}
					mode={mode}
				/>
			</div>
		</Form>
	);
}
