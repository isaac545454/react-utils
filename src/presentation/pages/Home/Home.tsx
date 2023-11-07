import { useHome } from './hook'
import { Fragment } from 'react'
import { Modal } from '../../components/Modal'
import { GridInput } from '../../components/GridInput'
import { InputMaskMolecule } from '../../molecules/Input'
import { useIndexedDB } from '../../hooks/useIndexDB'
import { DPD } from '../../utils/TEST/service/pix'
import { calculateCost } from '../../utils/TEST'
import { CookiesAdapter, StorageManage } from '../../../infra/Storage'
import { Evergreen } from '../../utils/TEST/service/debito'
import { Correios } from '../../utils/TEST/service/credito'
import { useFormContext } from 'react-hook-form'

export const Home = () => {
	const { showModal, errors, register, handleSubmit, onSubmit } = useHome()
	const { addItem, getAllItems } = useIndexedDB('Testt', 2)
	const AAAA = (a: string, b?: string) => console.log(a, b)
	const dpd = calculateCost({ paymentCalculator: DPD, distance: 10 })
	const evergreen = calculateCost({ paymentCalculator: Evergreen, distance: 10 })
	const correios = calculateCost({ paymentCalculator: Correios, distance: 10 })
	const cookies = new StorageManage(new CookiesAdapter())
	console.log(AAAA('aaaa'))
	const c = useFormContext()

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
							<Modal.ButtonCancel
								type="button"
								onClick={() => addItem({ data: { name: 'isaac' }, column: 'items', transition: 'readwrite' })}
							/>
							<Modal.ButtonToSend onClick={() => getAllItems({ column: 'items', transition: 'readwrite' })} />
						</Fragment>
					</Modal.ContainerButtons>
				</GridInput>
			</Fragment>
		</Modal.Container>
	)
}
