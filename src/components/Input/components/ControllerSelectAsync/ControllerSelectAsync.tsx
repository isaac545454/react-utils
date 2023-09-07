import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import Select from "react-select/async";

type ControllerSelectAsyncProps = React.ComponentProps<typeof Select>;

export function ControllerSelectAsync<TFieldValues extends FieldValues>({
  control,
  name,
  ...SelectProps
}: UseControllerProps<TFieldValues & ControllerSelectAsyncProps>) {
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
