import { useForm } from 'react-hook-form'
import { CreateResponse, SubmitData } from '../types'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '../schemas'
import { useNotification } from '../../../hooks/useNotification'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { HttpMethod } from '../../../types/req'
import { endpoint as HttpEndpoint } from '../../../../infra/Http/HttpClient/endpoint-http'
import { useHttpMutation } from '../../../hooks/useHttpMutation'
import { AxiosError } from 'axios'
import { ROUTES } from '../../../AppRouter'
import { useHttpQuery } from '../../../hooks/useHttpQuery'
import { steps } from '../steps'

export const useMultiForm = () => {
	const methods = useForm<SubmitData>({ resolver: zodResolver(schema) })
	const notification = useNotification()
	const [state, setState] = useState(0)
	const { id } = useParams()
	const navigate = useNavigate()

	const idExist = !!id
	const method = idExist ? HttpMethod.PUT : HttpMethod.POST
	const endpoint = idExist ? HttpEndpoint.editForm(id) : HttpEndpoint.create

	const { mutate: creation, isLoading: creationLoading } = useHttpMutation<CreateResponse, AxiosError, SubmitData>({
		HttpService: { endpoint, method },
		options: {
			onSuccess: () => {
				notification.success('Registro criado com sucesso')
				navigate(ROUTES.HOME)
			},
			onError: () => notification.error('Erro ao criar o registro'),
		},
	})

	const { isLoading, isError } = useHttpQuery<SubmitData>({
		queryKey: ['getForm'],
		HttpService: { endpoint: HttpEndpoint.getForm },
		options: {
			enabled: idExist,
			onSettled: data => data && methods.reset(data),
		},
	})

	const onSubmit = async () => {
		const key = steps[state].key
		const valid = await methods.trigger(key)
		if (!valid) return
		if (key !== steps[steps.length - 1].key) return setState(state => state + 1)
		creation(methods.getValues())
	}

	return {
		methods,
		creationLoading,
		isLoading,
		isError,
		onSubmit,
		idExist,
		state,
	}
}
