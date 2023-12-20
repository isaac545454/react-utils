import React, { ComponentProps } from 'react'

type ButtonProps = {
	isLoading: boolean
} & ComponentProps<'button'>

const Button: React.FC<ButtonProps> = props => {
	const { isLoading, ...res } = props

	return (
		<>
			{!isLoading && (
				<button type="button" {...res} disabled={isLoading}>
					enviar
				</button>
			)}
			{isLoading && <div>carregando</div>}
		</>
	)
}

export default Button
