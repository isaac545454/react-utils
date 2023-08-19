import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonToSend({ ...res }: Props) {
  return <button {...res}>ENVIAR</button>;
}
