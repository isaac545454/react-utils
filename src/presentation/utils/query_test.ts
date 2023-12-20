import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'

type User = {
	id: string
	name: string
}

export type ResponseQuery<T> = {
	data?: T
	isLoading: boolean
	isError: boolean
}

export type UserArray = Array<User>
export type FetchUserDataFunction = () => Promise<UserArray>
export type UserQueryResponse = ResponseQuery<UserArray>
export type UserArrayPromise = Promise<UserArray>

export const getUser = async (): UserArrayPromise => {
	const { data } = await axios.get<Array<User>>(`:id`)
	return data
}

export const getUserFetch = async (): UserArrayPromise => {
	const response = await fetch('')
	return await response.json()
}

export const useQueryUser = (PromiseFC: FetchUserDataFunction): UserQueryResponse => {
	const { data, isLoading, isError } = useQuery<UserArray>({
		queryKey: ['user'],
		queryFn: PromiseFC,
	})
	return { data, isLoading, isError }
}

export const useFetchData = (PromiseFC: FetchUserDataFunction): UserQueryResponse => {
	const [data, setData] = useState<UserArray>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [isError, setIsError] = useState<boolean>(false)

	useEffect(() => {
		PromiseFC()
			.then(response => setData(response))
			.catch(() => setIsError(true))
			.finally(() => setIsLoading(false))
	}, [])

	return { data, isLoading, isError }
}
