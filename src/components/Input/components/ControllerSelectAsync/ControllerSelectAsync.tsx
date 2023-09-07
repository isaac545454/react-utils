import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import Select from "react-select/async";

type ControllerSelectAsyncProps = React.ComponentProps<typeof Select>;

export const ControllerSelectAsync = <TFieldValues extends FieldValues>({
  name,
  control,
  ...SelectProps
}: UseControllerProps<TFieldValues> & ControllerSelectAsyncProps) => {
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
