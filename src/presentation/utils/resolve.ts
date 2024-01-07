type User = {
	email: string
	name: string
}

type IsResolvedResult<T, E> = Promise<SuccessResult<T> | FailureResult<E>>
type SuccessResult<TData> = [null, TData]
type FailureResult<E> = [E, null]

export const isResolved = async <T, E>(promiseToBeResolved: Promise<T>): IsResolvedResult<T, E> => {
	return promiseToBeResolved
		.then((results: T) => [null, results] as SuccessResult<T>)
		.catch(error => [error, null] as FailureResult<E>)
}

export const a = () => {
	return {
		test: '1',
	}
}

export const CreateUser = async () => {
	const [error, data] = await isResolved<User, unknown>(Promise.reject('teste'))

	if (error || !data) {
		//tratamento de erro
		return console.log(`error ${error}`)
	}

	console.log(`sucess ${data.email}`)
}

// type ResolvedResult<T> = [null, T]
// type RejectedResult = [unknown, null]
// type IsResolvedResult<T> = ResolvedResult<T> | RejectedResult

// type Test<TData> = {
// 	sucess: true
// 	data: TData
// 	error: null
// }

// type Test2 = {
// 	sucess: true
// 	data: null
// 	error: unknown
// }

// const isResolved = async <T>(promiseToBeResolved: Promise<T>): Promise<IsResolvedResult<T>> => {
// 	return promiseToBeResolved
// 		.then((results: T) => [null, results] as ResolvedResult<T>)
// 		.catch(error => [error, null] as RejectedResult)
// }

// export const TestIsResolve = async () => {
// 	const [error, sucess] = await isResolved<string>(Promise.resolve('sucess'))

// 	if (error) {
// 		//tratamento de erro
// 		return console.log(`error ${error}`)
// 	}

// 	console.log(`sucess ${sucess}`)
// }
