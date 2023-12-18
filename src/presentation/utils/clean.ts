import { z } from 'zod'

type User = z.infer<typeof UserSchema>

export const UserSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string().min(6),
})

export const createUser = ({ email, name, password }: User): User => {
	//createdAt
	//updatedAt
	return { name, email, password }
}

export const handleCreateUser = (userData: User): User => {
	UserSchema.parse(userData)
	return createUser(userData)
}
