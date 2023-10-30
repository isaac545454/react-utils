import { FormProvider } from 'react-hook-form'
import { Suspense } from 'react'
import { style } from './styles'
import Button from './components/Button'
import { Loading } from '../../components/Loading'
import { Error } from '../../components/atoms/Error'
import { Skeleton as SkeletonStep } from '../../components/Skeleton'
import { Container } from './components/Container'
import { steps } from './steps'
import { useMultiForm } from './hook'
import { ROUTES } from '../../AppRouter'

export const MultiForm = () => {
	const { methods, creationLoading, isError, isLoading, onSubmit, idExist, state } = useMultiForm()

	if (idExist && isLoading) return <Loading />
	if (idExist && isError) return <Error mensagem="Registro não encontrado" />

	return (
		<FormProvider {...methods}>
			<Container className={style.container}>
				<Suspense fallback={<SkeletonStep repetition={1} />}>
					<Container className={style.step}>{steps[state].step}</Container>
				</Suspense>
				<Button isLoading={creationLoading} save={{ onClick: onSubmit }} redirect={{ to: ROUTES.HOME }} />
			</Container>
		</FormProvider>
	)
}
