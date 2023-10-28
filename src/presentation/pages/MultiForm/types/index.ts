import { z } from 'zod'
import { schema } from '../schemas'

export type SubmitData = z.infer<typeof schema>

export enum FormSteps {
	Initial = 'Initial',
	Contact = 'Contact',
	Aboult = 'Aboult',
}

export type CreateResponse = {
	id: string
}
