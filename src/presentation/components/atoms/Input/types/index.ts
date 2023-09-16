import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export type InputMaskProps = InputHTMLAttributes<HTMLInputElement> & {
  mask: string;
};

export type ITemplate = {
  children: ReactNode;
} & LabelHTMLAttributes<HTMLLabelElement>



export type InputLabelProps = {
  label: string;
};

export type InputErrrorProps = {
  name:  string
  errors: Record<string, unknown>;
};
