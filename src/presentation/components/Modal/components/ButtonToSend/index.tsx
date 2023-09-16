import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonToSend = ({ ...res }: Props): JSX.Element => {
  return (
    <button
      {...res}
      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring mr-2"
    >
      ENVIAR
    </button>
  );
};
