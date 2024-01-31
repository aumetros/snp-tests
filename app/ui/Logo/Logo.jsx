import styles from './Logo.module.scss';

export default function Logo({ mode }) {
	return <div className={styles[mode]}></div>;
}
