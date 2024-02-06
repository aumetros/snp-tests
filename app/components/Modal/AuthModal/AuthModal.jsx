'use client';
import { useSelector } from 'react-redux';
import { selectModals, selectMessages } from 'store/selectors';
import { Modal } from 'components';
import { Typography } from 'ui';
import { H3 } from 'utils/constants/variants';
import { BLUE_DEEP } from 'utils/constants/variants';
import styles from './AuthModal.module.scss';

export default function ModalAddFilm() {
	const modals = useSelector(selectModals);
  const messages = useSelector(selectMessages);

	return (
		<Modal isOpen={modals.errorModal}>
			<div className={styles.container}>
				<div className={styles['error-icon']} />
        <Typography variant={H3} color={BLUE_DEEP}>{messages.message}</Typography>
			</div>
		</Modal>
	);
}
