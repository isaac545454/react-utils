import { InputHTMLAttributes, ReactNode } from "react";

export type Props = InputHTMLAttributes<HTMLInputElement>;

export type IMask = InputHTMLAttributes<HTMLInputElement> & { mask: string };

export type ITemplate = {
  children: ReactNode;
};

export type ErrorProps = {
  name: string;
  errrors: Record<string, unknown>;
};

export type LabelProps = {
  label: string;
};
