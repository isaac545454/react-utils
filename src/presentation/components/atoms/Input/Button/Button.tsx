import { IProps } from "./types";

export function Button({ ...res }: IProps) {
  return <button {...res} />;
}
