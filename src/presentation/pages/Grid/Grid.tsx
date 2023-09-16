import { GridInput } from "../../components/GridInput";
import {Input} from "../../components/atoms/Input";
import { useContact } from "./hook";

export function Grid() {
  const { handleSubmit, register, onSubmit } = useContact();

  return (
    <>
      <GridInput onSubmit={handleSubmit(onSubmit)}>
        <>
          <Input.Text {...register("name")} />
          <Input.Text {...register("email")} />
        </>
      </GridInput>
    </>
  );
}
