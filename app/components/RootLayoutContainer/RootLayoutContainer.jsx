import styles from "./RootLayoutContainer.module.scss";

export default function RootLayoutContainer({ children }) {
  return <div className={styles.root}>{children}</div>;
}
