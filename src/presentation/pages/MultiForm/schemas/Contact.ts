import { z } from 'zod'

export const Contact = z.object({
	phone: z.string().nonempty('Campo obrigatorio'),
})
