import { IProps } from "./types";

export function GridInput({ children, ...form }: IProps) {
  return (
    <form {...form}>
      <div className="flex  flex-col p-6 mt-6">{children}</div>
    </form>
  );
}
