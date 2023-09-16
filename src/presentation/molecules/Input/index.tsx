import { forwardRef, ComponentProps, useId } from "react"
import { Input } from "../../components/atoms/Input"

type InputMoleculeProps<TypeInputProps> = {
    InputErrrorProps: ComponentProps<typeof Input.Error>;
    InputTitleProps: ComponentProps<typeof Input.title>;
} &  TypeInputProps

export const InputTextMolecule =
  forwardRef<HTMLInputElement, InputMoleculeProps<ComponentProps<typeof Input.Text>>>
    ((props, ref) => {
    const { InputErrrorProps, InputTitleProps, ...InputTextProps } = props
    const id = useId()
    return (
      <Input.Label htmlFor={id}>
        <Input.title {...InputTitleProps} />
          <Input.Text ref={ref} {...InputTextProps} id={id}  />;
        <Input.Error {...InputErrrorProps} />
      </Input.Label>
    );
  }
);
export const InputMaskMolecule =
  forwardRef<HTMLInputElement, InputMoleculeProps<ComponentProps<typeof Input.Mask>>>
    ((props, ref) => {
      const { InputErrrorProps, InputTitleProps, ...InputMaskProps } = props
      const id = useId()
    return (
      <Input.Label htmlFor={id}>
        <Input.title {...InputTitleProps} />
         <Input.Mask ref={ref} {...InputMaskProps} id={id}  />;
        <Input.Error {...InputErrrorProps} />
      </Input.Label>
    );
  }
);

 