import { IResponsePost } from "../../types";
import { styles } from "./style";

export default function ListPosts({ data = [] }: { data: IResponsePost[] }) {
  return (
    <div className={styles.container}>
      {data?.map((item) => (
        <div key={item.id} className={styles.content}>
          <p>{item.title}</p>
          <p>{item.body}</p>
          <button className={styles.button}>Editar</button>
        </div>
      ))}
    </div>
  );
}
