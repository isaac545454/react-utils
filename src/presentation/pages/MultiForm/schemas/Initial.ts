import { z } from 'zod'

export const Initial = z.object({
	name: z.string().nonempty('Campo obrigatorio'),
	lastname: z.string().nonempty('Campo obrigatorio'),
})
