import { GridInput } from "../../components/GridInput";
import { Input } from "../../components/Input";
import { useContact } from "./hook";

export function Contact() {
  const { errors, handleSubmit, register, onSubmit } = useContact();

  return (
    <>
      <GridInput onSubmit={handleSubmit(onSubmit)}>
        <>
          <Input
            {...register("name")}
            errorExists={true}
            error={{ name: "name", errors }}
          />
          <Input
            {...register("email")}
            errorExists={true}
            error={{ name: "email", errors }}
          />
        </>
      </GridInput>
    </>
  );
}
