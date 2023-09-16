import { forwardRef } from "react";
import { InputMaskProps } from "../types";
import { styles } from "../styles";
import InputMask from "react-input-mask";

export const Mask = forwardRef<HTMLInputElement, InputMaskProps>(({mask, ...res}, ref) => {
   
  return <InputMask mask={mask} ref={ref} {...res} className={styles.Input} />;
});
