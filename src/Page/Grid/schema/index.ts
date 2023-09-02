import { z } from "zod";

export const schema = z.object({
  name: z.string().nonempty("Campo obrigatorio"),
  email: z.string().nonempty("Campo obrigatorio"),
});
