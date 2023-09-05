import { Props } from "./interface";

export function Ternary({ R_if, R_else, codition }: Props) {
  return <>{codition ? R_if : R_else}</>;
}
