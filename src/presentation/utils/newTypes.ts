export type User = {
	name: string
	email: string
}
export type handle = User & `on${string}`

export type AccessorMethods<T> = {
	[property in keyof T as `${'get' | 'set'}${Capitalize<string & property>}`]: any
}
//type AccessorMethods<T> = { [property in keyof T as
//`get${Capitalize<string & property>}` | `set${Capitalize<string & property>}`]: any; }

export type AccessorMethodsTest = AccessorMethods<Omit<User, 'name'>>
//type AccessorMethodsTest = {
//     getEmail: any;
//     setEmail: any;
// }

export type Obj = Record<handle, () => void>
// type Obj = {
//     onfullscreenchange: () => void;
//     onfullscreenerror: () => void;
//     onabort: () => void;
//     onanimationcancel: () => void;
//     onanimationend: () => void;
//     onanimationiteration: () => void;
//     onanimationstart: () => void;
//     onauxclick: () => void;
//     onbeforeinput: () => void;
//     ... 87 more ...;
//     onwheel: () => void;

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
