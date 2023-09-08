import { ComponentProps } from "react";
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import Select from "react-select/async";

export const ControllerSelectAsync = <TFieldValues extends FieldValues>({
  name,
  control,
  ...SelectProps
}: UseControllerProps<TFieldValues> & ComponentProps<typeof Select>) => {
  return (
    <Controller
      control={control}
      name={name}
      {...SelectProps}
      render={({ field }) => (
        <Select {...field} onChange={field.onChange} value={field.value} />
      )}
    />
  );
};
