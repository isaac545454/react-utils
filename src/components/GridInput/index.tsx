import { IProps } from "./types";

export function GridInput(props: IProps) {
  const { data, description, email, name, buttonSucess } = props;

  return (
    <div>
      <div className="flex justify-around">
        {data}
        {description}
        {email}
        {name}
      </div>
      <div>{buttonSucess}</div>
    </div>
  );
}
