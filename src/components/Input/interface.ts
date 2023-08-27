import React, { InputHTMLAttributes } from "react";
import { ErrorMessage } from "@hookform/error-message";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: React.ComponentProps<typeof ErrorMessage>;
  errorExists?: boolean;
}
