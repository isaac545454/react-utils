import { InputHTMLAttributes, ReactNode } from "react";

export type Props = InputHTMLAttributes<HTMLInputElement>;

export type IMask = InputHTMLAttributes<HTMLInputElement> & { mask: string };

export type ITemplate = {
  children: ReactNode;
};
