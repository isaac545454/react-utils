import { z } from 'zod'

export const Initial = z.object({
	name: z.string().nonempty('Campo obrigatorio'),
	lastname: z.string().nonempty('Campo obrigatorio'),
})

export const Contact = z.object({
	phone: z.string().nonempty('Campo obrigatorio'),
})
export const Aboult = z.object({
	description: z.string().nonempty('Campo obrigatorio'),
})

export const schema = z.object({
	Initial,
	Contact,
	Aboult,
})
