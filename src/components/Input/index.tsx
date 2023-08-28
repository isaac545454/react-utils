import { forwardRef } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Props } from "./interface";
import { styles } from "./styles";

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { errorExists = false, error, ...res } = props;

  return (
    <div>
      <input ref={ref} {...res} className={styles.Input} />
      {errorExists && error && <ErrorMessage {...error} />}
    </div>
  );
});
export default Input;
