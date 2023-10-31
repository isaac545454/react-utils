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
	const func = useMultiForm()

	if (func.idExist && func.isLoading) return <Loading />
	if (func.idExist && func.isError) return <Error mensagem="Registro não encontrado" />

	return (
		<FormProvider {...func.methods}>
			<Container className={style.container}>
				<Suspense fallback={<SkeletonStep repetition={1} />}>
					<Container className={style.step}>{steps[func.state].step}</Container>
				</Suspense>
				<Button isLoading={func.creationLoading} save={{ onClick: func.onSubmit }} redirect={{ to: ROUTES.HOME }} />
			</Container>
		</FormProvider>
	)
}
