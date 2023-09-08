import { forwardRef } from "react";
import { InputProps } from "../../types";
import { styles } from "../../styles";

export const DateInput = forwardRef<HTMLInputElement, InputProps>(
  ({ ...res }, ref) => {
    return (
      <input
        ref={ref}
        {...res}
        className={styles.Input}
        type="date"
        max="2030-01-01"
      />
    );
  }
);
