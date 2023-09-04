import { forwardRef } from "react";
import { Props } from "../../types";
import { styles } from "../../styles";

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { ...res } = props;

  return <input ref={ref} {...res} className={styles.Input} />;
});
