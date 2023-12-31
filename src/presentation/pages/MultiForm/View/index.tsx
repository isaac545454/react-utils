import { Loading } from '@/presentation/components/Loading'
import { useMultiFormModel } from '../Model/useMultiFormModel'
import { Error } from '@/presentation/components/atoms/Error'
import { FormProvider } from 'react-hook-form'
import { Container } from './components/Container'
import { Suspense } from 'react'
import { style } from './styles'
import { Skeleton } from '@/presentation/components/Skeleton'
import { lazy } from 'react'
import { FormSteps } from '../enum/steps'
import { Button } from './components/Button'

const AboutStep = lazy(() => import('./steps/Aboult').then(module => ({ default: module.Aboult })))
const InitialStep = lazy(() => import('./steps/Initial').then(module => ({ default: module.Initial })))
const ContactStep = lazy(() => import('./steps/Contact').then(module => ({ default: module.Contact })))

export const steps = [
	{ step: <InitialStep />, key: FormSteps.Initial },
	{ step: <ContactStep />, key: FormSteps.Contact },
	{ step: <AboutStep />, key: FormSteps.Aboult },
]

export const MultiFormView = (props: ReturnType<typeof useMultiFormModel>) => {
	const { creationLoading, idExist, isError, isLoading, methods, onSubmit, state } = props

	if (idExist && isLoading) return <Loading />
	if (idExist && isError) return <Error mensagem="Registro não encontrado" />

	return (
		<FormProvider {...methods}>
			<Container className={style.container}>
				<Suspense fallback={<Skeleton repetition={1} />}>
					<Container className={style.step}>{steps[state].step}</Container>
				</Suspense>
				<Button isLoading={creationLoading} onClick={onSubmit} />
			</Container>
		</FormProvider>
	)
}
