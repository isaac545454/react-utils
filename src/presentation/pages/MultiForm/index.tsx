import { FormProvider, useForm } from 'react-hook-form'
import { Aboult } from './steps/Aboult'
import { Initial } from './steps/Initial'
import { Contact } from './steps/Contact'
import { useState } from 'react'
import { schema } from './schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { ResponseSubit, TypeFormSubmit, TypesSubmit } from './types'
import { useHttpMutation } from '../../hooks/useHttpMutation'
import { endpoint as HttpEndpoint } from '../../../infra/Http/HttpClient/endpoint-http'
import { AxiosError } from 'axios'
import { style } from './styles'
import Button from './components/Button'
import { useHttpQuery } from '../../hooks/useHttpQuery'
import { Loading } from '../../components/Loading'
import { Error } from '../../components/atoms/Error'
import { useNavigate, useParams } from 'react-router-dom'
import { HttpMethod } from '../../types/req'
import { ROUTES } from '../../AppRouter'
import { toast } from 'react-toastify'

const steps = [
	{ page: <Initial />, key: TypesSubmit.Initial },
	{ page: <Contact />, key: TypesSubmit.Contact },
	{ page: <Aboult />, key: TypesSubmit.Aboult },
]

export const MultiForm = () => {
	const methods = useForm<TypeFormSubmit>({ resolver: zodResolver(schema) })
	const [state, setState] = useState(0)
	const { id } = useParams()
	const navigate = useNavigate()

	const idExists = !!id
	const method = idExists ? HttpMethod.PUT : HttpMethod.POST
	const endpoint = idExists ? HttpEndpoint.editForm(id) : HttpEndpoint.create

	const { mutate, isLoading: mutateLoading } = useHttpMutation<ResponseSubit, AxiosError, TypeFormSubmit>({
		HttpService: { endpoint, method },
		options: {
			onSuccess: () => {
				toast.success('sucesso')
				navigate(ROUTES.HOME)
			},
			onError: () => {
				toast.error('error')
			},
		},
	})

	const { isLoading, isError } = useHttpQuery<TypeFormSubmit>({
		queryKey: ['form'],
		HttpService: { endpoint: HttpEndpoint.getForm },
		options: {
			enabled: idExists,
			onSettled: data => data && methods.reset(data),
		},
	})

	const onSubmit = async () => {
		const key = steps[state].key
		const valid = await methods.trigger(key)
		if (!valid) return
		if (key !== steps[steps.length - 1].key) return setState(state => state + 1)
		const parseFormat = schema.parse(methods.getValues())
		mutate(parseFormat)
	}

	if (idExists && isLoading) return <Loading />
	if (idExists && isError) return <Error mensagem="Error" />

	return (
		<div className={style.Container}>
			<FormProvider {...methods}>
				<div className={style.page}>{steps[state].page}</div>
				<Button isLoading={mutateLoading} onClick={onSubmit} />
			</FormProvider>
		</div>
	)
}
