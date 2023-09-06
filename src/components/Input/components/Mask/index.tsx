import { forwardRef } from "react";
import { MaskProps } from "../../types";
import { styles } from "../../styles";
import InputMask from "react-input-mask";

export const Mask = forwardRef<HTMLInputElement, MaskProps>((props, ref) => {
  const { mask, ...res } = props;

  return <InputMask mask={mask} ref={ref} {...res} className={styles.Input} />;
});
