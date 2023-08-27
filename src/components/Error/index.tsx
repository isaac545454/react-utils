import { Props } from "./interface";
import { style } from "./style";

export default function Error({ mensagem }: Props) {
  return (
    <div role="ErrorMessage" className={style.error}>
      {mensagem}
    </div>
  );
}
