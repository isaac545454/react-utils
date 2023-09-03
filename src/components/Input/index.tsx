import { forwardRef } from "react";
import { Props } from "./types";
import { styles } from "./styles";

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, message, ...res } = props;
  return (
    <div>
      <span>{label}</span>
      <input ref={ref} {...res} className={styles.Input} />
      {message}
    </div>
  );
});
