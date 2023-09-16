import { forwardRef } from "react";
import { InputProps } from "../types";
import { styles } from "../styles";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { ...res } = props;

  return <input ref={ref} {...res} className={styles.Input} />;
});
