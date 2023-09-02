import { forwardRef } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Props } from "./types";
import { styles } from "./styles";

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { errorExists = false, error, ...res } = props;

  return (
    <div>
      <input ref={ref} {...res} className={styles.Input} />
      {errorExists && error && (
        <ErrorMessage
          {...error}
          render={({ message }) => <p className={styles.error}>{message}</p>}
        />
      )}
    </div>
  );
});
