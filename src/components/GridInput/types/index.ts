import { FormHTMLAttributes, ReactNode } from "react";
export interface IProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}
