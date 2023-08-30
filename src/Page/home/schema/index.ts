import { z } from "zod";

export const schema = z.object({
  body: z.string().nonempty("Campo obrigatorio"),
  title: z.string().nonempty("Campo obrigatorio"),
});
