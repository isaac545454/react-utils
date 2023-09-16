import { ErrorMessage } from "@hookform/error-message";
import { styles } from "./style";
import { InputErrrorProps } from "../types";


export function ErrrorInput({ errors, name }: InputErrrorProps) {
  return (
    <ErrorMessage
      name={name as string}
      errors={errors}
      render={({ message }) => <span className={styles.error}>{message}</span>}
    />
  );
}
