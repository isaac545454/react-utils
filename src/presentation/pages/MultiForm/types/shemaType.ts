import { z } from 'zod'
import { schema } from '../schemas/root'
export type SubmitData = z.infer<typeof schema>
