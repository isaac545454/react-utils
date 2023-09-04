import { forwardRef } from "react";
import { IMask } from "../../types";
import { styles } from "../../styles";
import InputMask from "react-input-mask";

export const Mask = forwardRef<HTMLInputElement, IMask>((props, ref) => {
  const { mask, ...res } = props;

  return <InputMask mask={mask} ref={ref} {...res} className={styles.Input} />;
});
