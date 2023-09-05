import { schema } from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISchema } from "../types";

export const useContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISchema>({ resolver: zodResolver(schema) });

  const onSubmit = ({ email, name }: ISchema) => {
    console.log({ email, name });
  };

  return {
    errors,
    register,
    handleSubmit,
    onSubmit,
  };
};
