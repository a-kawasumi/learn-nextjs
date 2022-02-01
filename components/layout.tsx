import styles from "./layout.module.css";

interface PageProps {
  title: string;
  logData: {
    screenName: string;
  };
}

interface Props {
  children?: React.ReactNode;
  pageProps: PageProps;
}

export default function Layout(props: Props) {
  return <div className={styles.container}>{props.children}</div>;
}
