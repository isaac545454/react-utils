import { endpoint } from '../../../../infra/Http/endpoint-http'
import { useHttpQuery } from '../../../hooks/index'
import { IResponsePost } from '../../Home/types'

export const usePost = () => {
	const { data, isLoading, isError } = useHttpQuery<IResponsePost[]>({
		queryKey: ['getPosts'],
		HttpService: { endpoint: endpoint.getPosts },
	})

	return {
		isLoading,
		isError,
		data,
	}
}
