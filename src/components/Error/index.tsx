import { Props } from "./types";
import { style } from "./styles";

export default function Error({ mensagem }: Props) {
  return (
    <div role="ErrorMessage" className={style.error}>
      {mensagem}
    </div>
  );
}
