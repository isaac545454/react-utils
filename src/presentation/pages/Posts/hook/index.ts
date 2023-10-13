import { endpoint } from '../../../../infra/Http/HttpClient/endpoint-http'
import { useHttpQuery } from '../../../hooks/useHttpQuery'
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
