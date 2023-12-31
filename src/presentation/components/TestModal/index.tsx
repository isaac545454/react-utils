import { ComponentProps, PropsWithChildren } from 'react'

type ModalProps = {
	showCancelButton: boolean
	showSubmitButton: boolean
} & PropsWithChildren

export const Modal = ({ children, showCancelButton, showSubmitButton }: ModalProps) => {
	return (
		<div>
			{children}
			<div>
				{showCancelButton && <button>Cancel</button>}
				{showSubmitButton && <button>Submit</button>}
			</div>
		</div>
	)
}
;<Modal showCancelButton={true} showSubmitButton={false}>
	{/* Seu conteúdo aqui */}
</Modal>

// export const ModalContainer = ({ children }: PropsWithChildren) => {
// 	return <div>{children}</div>
// }

// //container que alinha os dois button
// export const ModalContainerButton = ({ children }: PropsWithChildren) => {
// 	return <div>{children}</div>
// }

// type ModalContainerButtonProps = ComponentProps<'button'> & {
// 	variants: 'Cancel' | 'Success'
// }
// export const ModalButton = ({ variants, ...res }: ModalContainerButtonProps) => {
// 	return <button {...res} />
// }

// export const Modal = {
// 	Root: ModalContainer,
// 	ContainerButton: ModalContainerButton,
// 	Button: ModalButton,
// }

// const App = () => {
// 	return (
// 		<Modal.Root>
// 			<p>Conteúdo do modal vai aqui</p>

// 			<Modal.ContainerButton>
// 				<Modal.Button variants="Cancel" onClick={() => console.log('Cancel clicked')}>
// 					Cancel
// 				</Modal.Button>
// 				<Modal.Button variants="Success" onClick={() => console.log('Success clicked')}>
// 					Success
// 				</Modal.Button>
// 			</Modal.ContainerButton>
// 		</Modal.Root>
// 	)
// }
