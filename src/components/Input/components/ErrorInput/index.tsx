import { ErrorMessage } from "@hookform/error-message";
import { styles } from "./style";
import { ErrorProps } from "../../types";

export const ErrrorInput = ({ name, errrors }: ErrorProps) => {
  return (
    <ErrorMessage
      name={name}
      errors={errrors}
      render={({ message }) => <span className={styles.error}>{message}</span>}
    />
  );
};
