import { GridInput } from "../../components/GridInput";
import { Input } from "../../components/Input";
import { useContact } from "./hook";

export function Contact() {
  const { errors, handleSubmit, register, onSubmit } = useContact();

  return (
    <>
      <GridInput
        form={{ onSubmit: handleSubmit(onSubmit) }}
        name={
          <Input
            {...register("name")}
            errorExists={true}
            error={{ name: "name", errors }}
          />
        }
        email={
          <Input
            {...register("email")}
            errorExists={true}
            error={{ name: "email", errors }}
          />
        }
      />
    </>
  );
}
