import { Props } from "./interface";

export default function Ternary({ R_if, R_else, codition }: Props) {
  return <>{codition ? R_if : R_else}</>;
}
