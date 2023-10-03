
import { useHome } from './hook'
import { Fragment } from 'react'
import { Modal } from '../../components/Modal'
import { GridInput } from '../../components/GridInput'
import { InputMaskMolecule } from '../../molecules/Input'

export const Home = () => {
	const { showModal, errors, register, handleSubmit, onSubmit } = useHome()

	return (
		<Modal.Container showModal={showModal}>
			<Fragment>
				<Modal.Header />
				<GridInput onSubmit={handleSubmit(onSubmit)}>
					<Fragment>
						<InputMaskMolecule
							InputErrrorProps={{ errors: errors, name: 'cpf' }}
							InputTitleProps={{ label: 'CPF' }}
							{...register('cpf')}
							mask="999.999.999.99"
						/>
					</Fragment>
					<Modal.ContainerButtons>
						<Fragment>
							<Modal.ButtonCancel type="button" />
							<Modal.ButtonToSend type="submit" />
						</Fragment>
					</Modal.ContainerButtons>
				</GridInput>
			</Fragment>
		</Modal.Container>
	)
}
