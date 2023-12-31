import { z } from 'zod'

export const Aboult = z.object({
	description: z.string().nonempty('Campo obrigatorio'),
})
