import { FormHTMLAttributes, ReactNode } from "react";
export interface IProps {
  form: FormHTMLAttributes<HTMLFormElement>;
  name: ReactNode;
  email: ReactNode;
}
