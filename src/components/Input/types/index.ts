import { InputHTMLAttributes, ReactNode } from "react";
import { Props } from "react-select";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export type MaskProps = InputHTMLAttributes<HTMLInputElement> & {
  mask: string;
};

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

export type ControllerSelectProps = Props;
