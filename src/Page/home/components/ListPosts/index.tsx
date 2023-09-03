import { memo } from "react";
import { IResponsePost } from "../../types";
import { styles } from "./style";

interface Props {
  data: IResponsePost[];
  onChangeModal: () => void;
}

function ListPosts({ data = [], onChangeModal }: Props) {
  return (
    <div className={styles.container}>
      {data?.map((item) => (
        <div key={item.id} className={styles.content}>
          <p>{item.title}</p>
          <p>{item.body}</p>
          <button className={styles.button} onClick={onChangeModal}>
            Editar
          </button>
        </div>
      ))}
    </div>
  );
}
export default memo(ListPosts);
