import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonToSend = ({ ...res }: Props): JSX.Element => {
  return <button {...res}>ENVIAR</button>;
};
