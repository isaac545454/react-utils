export type AccessorMethods<T> = {
	[property in keyof T as `${'get' | 'set'}${Capitalize<string & property>}`]: any
}

export class UserEmail implements AccessorMethods<Omit<User, 'name'>> {
	getEmail(): string {
		return 'aaaa'
	}
	setEmail(): string {
		return 'bbbb'
	}
}

export type User = {
	name: string
	email: string
}

const initializeAsyncOperation = async (params: User): Promise<User> => {
	return new Promise<User>(resolve => {
		resolve(params)
	})
}

export const createUser = async (params: User): Promise<User> => {
	try {
		return await initializeAsyncOperation(params)
	} catch {
		throw new Error()
	}
}
