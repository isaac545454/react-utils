import { Props } from "../../types/IButtonCancel";
import { style } from "../../styles/ButtonCancel";

export const ButtonCancel = ({ onChangeModal, ...res }: Props): JSX.Element => {
  return (
    <button {...res} className={style.button} onClick={onChangeModal}>
      CANCELAR
    </button>
  );
};
