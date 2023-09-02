import { IProps } from "./types";

export function GridInput({ children, ...form }: IProps) {
  return (
    <form {...form}>
      <div className="flex justify-around">{children}</div>
      <div>
        <button>ENVIAR</button>
      </div>
    </form>
  );
}
