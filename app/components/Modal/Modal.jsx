'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from 'store/slices/modalsSlice';
import styles from './Modal.module.scss';

export default function Modal({ children, isOpen }) {
	const dispatch = useDispatch();
	const modalContainer = React.useRef();

	const handleCloseModal = React.useCallback(() => {
		dispatch(closeModal());
	}, [dispatch]);

	const handleOverlayCloseModal = React.useCallback(
		(e) => {
			if (!modalContainer.current.contains(e.target)) {
				handleCloseModal();
			}
		},
		[handleCloseModal]
	);

	const handleEscCloseModal = React.useCallback(
		(e) => {
			if (e.key === 'Escape') {
				handleCloseModal();
			}
		},
		[handleCloseModal]
	);

	React.useEffect(() => {
		if (isOpen) {
			document.addEventListener('click', handleOverlayCloseModal);
			return () =>
				document.removeEventListener('click', handleOverlayCloseModal);
		}
	}, [isOpen, handleOverlayCloseModal]);

	React.useEffect(() => {
		if (isOpen) {
			document.addEventListener('keydown', handleEscCloseModal);
			return () => document.removeEventListener('keydown', handleEscCloseModal);
		}
	}, [isOpen, handleEscCloseModal]);

	return (
		<aside className={`${styles.root} ${isOpen && styles.opened}`}>
			<div className={styles.container} ref={modalContainer}>
				{children}
				<button
					type="button"
					className={styles.close}
					onClick={handleCloseModal}
				></button>
			</div>
		</aside>
	);
}
