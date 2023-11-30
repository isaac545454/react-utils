export const createUser = (name: string, email: string, password: string) => {
	return { name, email, password }
}

// createUser('test', 'test@gmail.com', '12456')

// type CreateUser = {
// 	name: string
// 	email: string
// 	password: string
// }

// export const createUser = ({ email, name, password }: CreateUser) => {
// 	return { name, email, password }
// }

// createUser()
