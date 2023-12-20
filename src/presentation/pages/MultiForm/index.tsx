import { FormProvider } from 'react-hook-form'
import { Suspense } from 'react'
import { style } from './styles'
import Button from './components/Button'
import { Loading } from '../../components/Loading'
import { Error } from '../../components/atoms/Error'
import { Skeleton as SkeletonStep } from '../../components/Skeleton'
import { Container } from './components/Container'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { SubmitData } from './types'
import { schema } from './schemas'
import { useCreateMultiForm } from '@/presentation/query/MultiForm/post'
import { useGetMultiForm } from '@/presentation/query/MultiForm/get'
import { steps } from './steps'

///model
export const useMultiFormModel = () => {
	const { id } = useParams()
	const methods = useForm<SubmitData>({ resolver: zodResolver(schema) })
	const { mutate: creation, isLoading: creationLoading } = useCreateMultiForm({ id })
	const { isError, isLoading } = useGetMultiForm({ methods, id: id ?? '' })
	const [state, setState] = useState(0)

	const onSubmit = async () => {
		const key = steps[state].key
		const valid = await methods.trigger(key)
		if (!valid) return
		if (key !== steps[steps.length - 1].key) return setState(state => state + 1)
		creation(methods.getValues())
	}

	return { methods, creationLoading, isLoading, isError, onSubmit, idExist: !!id, state }
}

//view
export const MultiFormView = (props: ReturnType<typeof useMultiFormModel>) => {
	const { creationLoading, idExist, isError, isLoading, methods, onSubmit, state } = props

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

//viewModel
export const MultiForm = () => {
	const formModel = useMultiFormModel()
	return <MultiFormView {...formModel} />
}
