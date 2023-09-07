import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import Select from "react-select";
import { ControllerSelectProps } from "../../types";

export function ControlletSelect<TFieldValues extends FieldValues>({
  control,
  name,
  ...SelectProps
}: UseControllerProps<TFieldValues & ControllerSelectProps>) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        {...SelectProps}
        render={({ field }) => <Select {...field} {...SelectProps} />}
      />
    </>
  );
}
