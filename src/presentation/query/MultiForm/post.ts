import { CreateResponse, SubmitData } from '@pages/MultiForm/types'
import { useHttpMutation } from '../../hooks/useHttpMutation'
import { AxiosError } from 'axios'
import { HttpMethod } from '../../types/req'
import { ROUTES } from '../../AppRouter'
import { useNavigate } from 'react-router-dom'
import { localStorageFactory } from '../../factories/localStorageFactory'
import { endpoint as HttpEndpoint } from '../../../infra/Http/HttpClient/endpoint-http'
import { useNotification } from '../../factories/notification'

type useCreateMultiFormProps = {
	id?: string
}

export const useCreateMultiForm = ({ id }: useCreateMultiFormProps) => {
	const navigate = useNavigate()
	const { removeItem } = localStorageFactory()
	const { success, error } = useNotification()
	const idExist = !!id
	const method = idExist ? HttpMethod.PUT : HttpMethod.POST
	const endpoint = idExist ? HttpEndpoint.editForm(id) : HttpEndpoint.create

	const data = useHttpMutation<CreateResponse, AxiosError, SubmitData>({
		HttpService: { endpoint, method },
		options: {
			onSuccess: () => {
				success('Registro criado com sucesso')
				navigate(ROUTES.HOME)
				removeItem('form')
			},
			onError: () => error('Erro ao criar o registro'),
		},
	})
	return data
}
