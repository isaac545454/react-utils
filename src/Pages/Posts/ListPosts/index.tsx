import { ContainerProps, ListPostsProps } from "../types";
import { styles } from "./style";
import { Loading } from "../../../components/Loading";
import { Error } from "../../../components/Error";

export const DataLoader = ({
  isloading,
  isErrror,
  children,
}: ContainerProps) => {
  if (isloading) return <Loading />;
  if (isErrror) return <Error mensagem="error" />;

  return <>{children}</>;
};

export const Posts = ({ data }: ListPostsProps) => {
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
