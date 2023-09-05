import { z } from "zod";
import { schema } from "../schema";

export interface IResponsePost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type ISchema = z.infer<typeof schema>;
