import { FormProvider, useForm } from 'react-hook-form'

import { Suspense, lazy, useState } from 'react'
import { schema } from './schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateResponse, SubmitData, FormSteps } from './types'
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
import { useNotification } from '../../hooks/useNotification'
import { Skeleton as SkeletonStep } from '../../components/Skeleton'
import { Container } from './components/Container'

const AboutStep = lazy(() => import('./steps/Aboult').then(module => ({ default: module.Aboult })))
const InitialStep = lazy(() => import('./steps/Initial').then(module => ({ default: module.Initial })))
const ContactStep = lazy(() => import('./steps/Contact').then(module => ({ default: module.Contact })))

const steps = [
	{ step: <InitialStep />, key: FormSteps.Initial },
	{ step: <ContactStep />, key: FormSteps.Contact },
	{ step: <AboutStep />, key: FormSteps.Aboult },
]

export const MultiForm = () => {
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

	if (idExist && isLoading) return <Loading />
	if (idExist && isError) return <Error mensagem="Registro não encontrado" />

	return (
		<FormProvider {...methods}>
			<Container className={style.container}>
				<Suspense fallback={<SkeletonStep repetition={1} />}>
					<Container className={style.step}>{steps[state].step}</Container>
				</Suspense>
				<Button isLoading={creationLoading} onClick={onSubmit} />
			</Container>
		</FormProvider>
	)
}
