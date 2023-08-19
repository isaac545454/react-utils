import React, { InputHTMLAttributes, forwardRef } from "react";
import { ErrorMessage } from "@hookform/error-message";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: React.ComponentProps<typeof ErrorMessage>;
  errorExists: boolean;
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { errorExists = false, error, ...res } = props;

  return (
    <div>
      <input
        ref={ref}
        {...res}
        className={`mb-4 h-10 rounded-lg bg-dark-900 text-white p-4 border
      border-gray-200 placeholder:text-gray-400 w-full`}
      />
      {errorExists && <ErrorMessage {...error} />}
    </div>
  );
});
