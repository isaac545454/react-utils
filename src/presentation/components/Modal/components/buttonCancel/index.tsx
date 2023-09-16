import { Props } from "../../types/IButtonCancel";
import { style } from "../../styles/ButtonCancel";

export const ButtonCancel = ({ ...res }: Props): JSX.Element => {
  return (
    <button {...res} className={style.button}>
      CANCELAR
    </button>
  );
};
