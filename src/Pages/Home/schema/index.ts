import { z } from "zod";

export const schema = z.object({
  cpf: z.string().nonempty("Campo obrigatorio"),
  password: z.string().nonempty("Campo obrigatorio"),
  select: z.object({
    value: z.string().nonempty("Campo obrigatorio"),
    label: z.string().nonempty("Campo obrigatorio"),
  }),
});
