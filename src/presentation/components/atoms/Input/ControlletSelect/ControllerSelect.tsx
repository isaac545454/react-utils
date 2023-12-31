import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import Select, { Props as ControllerSelectProps } from "react-select";

export const ControllerSelect = <TFieldValues extends FieldValues>({
  control,
  name,
  ...SelectProps
}: UseControllerProps<TFieldValues> & ControllerSelectProps) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        {...SelectProps}
        render={({ field }) => (
          <Select
            {...SelectProps}
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />
    </>
  );
};
