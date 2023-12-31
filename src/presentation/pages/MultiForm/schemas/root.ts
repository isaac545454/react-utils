import { z } from 'zod'
import { Initial } from './Initial'
import { Contact } from './Contact'
import { Aboult } from './Aboult'

export const schema = z.object({
	Initial,
	Contact,
	Aboult,
})
