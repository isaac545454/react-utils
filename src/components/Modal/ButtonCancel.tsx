import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onChangeModal: () => void;
}

export const ButtonCancel = ({ onChangeModal, ...res }: Props): JSX.Element => {
  return (
    <button
      {...res}
      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring"
      onClick={onChangeModal}
    >
      CANCELAR
    </button>
  );
};
