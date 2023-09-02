import { IProps } from "./types";

export function GridInput({ email, form, name }: IProps) {
  return (
    <form {...form}>
      <div className="flex justify-around">
        {email}
        {name}
      </div>
      <div>
        <button>ENVIAR</button>
      </div>
    </form>
  );
}
