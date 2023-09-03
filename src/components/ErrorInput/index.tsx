import { ErrorMessage } from "@hookform/error-message";
import { styles } from "./style";

interface IProps {
  name: string;
  errrors: Record<string, unknown>;
}

export const ErrrorInput = ({ name, errrors }: IProps) => {
  return (
    <ErrorMessage
      name={name}
      errors={errrors}
      render={({ message }) => <span className={styles.error}>{message}</span>}
    />
  );
};
