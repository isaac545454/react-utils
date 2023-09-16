import { ErrorMessage } from "@hookform/error-message";
import { styles } from "./style";

type Props<TInter> = {
  name: keyof TInter;
  errors: Record<string, unknown>;
};

export function ErrrorInput<TInter>({ errors, name }: Props<TInter>) {
  return (
    <ErrorMessage
      name={name as string}
      errors={errors}
      render={({ message }) => <span className={styles.error}>{message}</span>}
    />
  );
}
