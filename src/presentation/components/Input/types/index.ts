import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export type MaskProps = InputHTMLAttributes<HTMLInputElement> & {
  mask: string;
};

export type ITemplate = {
  children: ReactNode;
} & LabelHTMLAttributes<HTMLLabelElement>



export type LabelProps = {
  label: string;
};
