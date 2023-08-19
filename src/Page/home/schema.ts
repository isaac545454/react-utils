import { z } from "zod";

export const schema = z.object({
  body: z.string(),
  title: z.string(),
});
