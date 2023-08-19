import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonCancel = ({ ...res }: Props): JSX.Element => {
  return <button {...res}>ENVIAR</button>;
};
