import { HTMLAttributes } from 'react'
type Props = {
	children: JSX.Element
	showModal: boolean
} & HTMLAttributes<HTMLDivElement>

export const Container: React.FC<Props> = ({ children, showModal, ...res }) => {
	if (!showModal) return null

	return (
		<div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50" {...res}>
			<div className="bg-white  rounded-3xl pb-4  relative shadow-md w-1/4 ">
				<div className="">{children}</div>
			</div>
		</div>
	)
}
