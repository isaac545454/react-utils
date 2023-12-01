type CreateUser = {
	name: string
	email: string
	password: string
}

// const createUser = ({ email, name, password }: CreateUser): string => {
// 	if (email) {
// 		if (name) {
// 			if (password) {
// 				return 'createuser'
// 			} else {
// 				return 'password required'
// 			}
// 		} else {
// 			return 'name required'
// 		}
// 	} else {
// 		return 'email required'
// 	}
// }

const createUser = ({ email, name, password }: CreateUser): string => {
	if (!email) return 'email required'
	if (!name) return 'name required'
	if (!password) return 'password required'
	return 'createuser'
}
