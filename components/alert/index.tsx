import styles from "./index.module.css";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  type?: "success" | "error";
}

export default function Alert(props: Props) {
  const { children, type } = props;
  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}
