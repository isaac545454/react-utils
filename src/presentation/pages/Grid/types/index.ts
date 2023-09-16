import { z } from "zod";
import { schema } from "../schema";

export type ISchema = z.infer<typeof schema>;
