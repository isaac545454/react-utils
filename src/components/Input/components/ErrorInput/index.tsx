import { ErrorMessage } from "@hookform/error-message";
import { styles } from "./style";

export const ErrrorInput = ({
  ...resError
}: React.ComponentProps<typeof ErrorMessage>) => {
  return (
    <ErrorMessage
      {...resError}
      render={({ message }) => <span className={styles.error}>{message}</span>}
    />
  );
};
