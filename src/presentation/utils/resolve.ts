type IsResolvedResult<T> = Promise<SuccessResult<T> | FailureResult>

type SuccessResult<TData> = {
	data: TData
	error: null
}

type FailureResult = {
	data: null
	error: unknown
}

type User = {
	email: string
	name: string
}

const isResolved = async <T>(promiseToBeResolved: Promise<T>): IsResolvedResult<T> => {
	return promiseToBeResolved
		.then(
			(results: T) =>
				({
					data: results,
					error: null,
				} as SuccessResult<T>),
		)
		.catch(
			error =>
				({
					data: null,
					error: error,
				} as FailureResult),
		)
}

export const CreateUser = async () => {
	const { data, error } = await isResolved<User>(Promise.reject('teste'))

	if (error) {
		//tratamento de erro
		return console.log(`error ${error}`)
	}

	console.log(`sucess ${data}`)
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
