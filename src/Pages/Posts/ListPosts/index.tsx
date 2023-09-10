import { ListPostsProps } from "../types";
import { styles } from "./style";
import { withErrorAndLoadingHandlingProps } from "../../../components/HOC/HOC";

type ListPostsWithLoadingProps = ListPostsProps &
  withErrorAndLoadingHandlingProps;

export const ListPosts: React.FC<ListPostsWithLoadingProps> = ({
  data = [],
}) => {
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
};
