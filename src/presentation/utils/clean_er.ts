import { UserSchema } from './clean'

export const create = (name: string, email: string, password: string) => {
	return { name, email, password }
}

export const hadle = (name: string, email: string, password: string) => {
	UserSchema.parse({ name, email, password })
	create('test', 'test@gmail.com', '12456')
}
