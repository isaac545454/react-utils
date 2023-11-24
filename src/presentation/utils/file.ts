const test1 = Object.freeze({
	test: '/test',
	login: '/login',
	users: '/users',
	test2: { a: 'a' },
})
// const test1: Readonly<{
// 	test: '/test'
// 	login: '/login'
// 	users: '/users'
// 	test2: { a: string }
// }>

const test2 = {
	test: '/test',
	login: '/login',
	users: '/users',
	test2: { a: 'a' },
} as const
// const test2: {
// 	readonly test: '/test'
// 	readonly login: '/login'
// 	readonly users: '/users'
// 	readonly test2: { readonly a: 'a' }
// }

test1.login = '/test2'
//Cannot assign to 'login' because it is a read-only property.
test1.test2.a = 'b'

test2.login = '/test2'
//Cannot assign to 'login' because it is a read-only property.
test2.test2.a = 'c'
//Cannot assign to 'a' because it is a read-only property.

type TestProps = (typeof test2)[keyof typeof test2]
//type TestProps = "/test" | "/login" | "/users"

export enum FileType {
	WORD = 'word',
	PDF = 'pdf',
}

const fileGeneratorWord = ({ test }: FileParams) => console.log(test)
const fileGeneratorPdf = ({ test }: FileParams) => console.log(test)

const fileGeneratorsMap = {
	[FileType.WORD]: fileGeneratorWord,
	[FileType.PDF]: fileGeneratorPdf,
}

type FileParams = {
	test: string
}

type FileGeneratorParams = {
	type: FileType
	params: FileParams
}

export const fileGenerator = ({ params, type }: FileGeneratorParams) => {
	return fileGeneratorsMap[type](params)
}
