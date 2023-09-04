import { InputHTMLAttributes, ReactNode } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export interface IMask extends Props {
  mask: string;
}

export type ITemplate = {
  children: ReactNode;
};
