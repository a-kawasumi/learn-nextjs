import styles from "./layout.module.css";

interface Props {
  children: any;
}

export default function Layout(props: Props) {
  return <div className={styles.container}>{props.children}</div>;
}
