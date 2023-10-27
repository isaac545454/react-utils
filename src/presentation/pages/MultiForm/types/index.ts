import { z } from 'zod'
import { schema } from '../schemas'

export type TypeFormSubmit = z.infer<typeof schema>

export enum TypesSubmit {
	Initial = 'Initial',
	Contact = 'Contact',
	Aboult = 'Aboult',
}

export type ResponseSubit = {
	id: string
}
