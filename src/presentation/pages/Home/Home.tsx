import { useHome } from './hook'
import { Fragment, ElementRef, useRef } from 'react'
import { Modal } from '../../components/Modal'
import { GridInput } from '../../components/GridInput'
import { InputMaskMolecule } from '../../molecules/Input'
import { Button } from '../../components/Button'
import { Input } from '../../components/atoms/Input'

export const Home = () => {
	const { showModal } = useHome()
	const InputRef = useRef<ElementRef<'input'>>(null)

	console.log(InputRef.current?.value)

	return (
		<Modal.Container showModal={showModal}>
			<Input.Text ref={InputRef} />
		</Modal.Container>
	)
}
