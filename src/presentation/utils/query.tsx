import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

type User = {
	id: string
	name: string
}

export const App = () => {
	const { data } = useQuery<Array<User>>({
		queryKey: ['user'],
		queryFn: async () => {
			const { data } = await axios.get(`:id`)
			return data
		},
	})
	return (
		<div>
			{data?.map(item => (
				<div key={item.id}>{item.name}</div>
			))}
		</div>
	)
}

const getUser = async () => {
	const { data } = await axios.get(`:id`)
	return data
}

const useQueryUser = () => {
	return useQuery<Array<User>>({
		queryKey: ['user'],
		queryFn: getUser,
	})
}

export const App2 = () => {
	const { data } = useQueryUser()

	return (
		<div>
			{data?.map(item => (
				<div key={item.id}>{item.name}</div>
			))}
		</div>
	)
}
