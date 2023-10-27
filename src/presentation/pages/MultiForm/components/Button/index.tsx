import React from 'react'

type ButtonProps = {
	isLoading: boolean
} & React.ComponentProps<'button'>

const Button: React.FC<ButtonProps> = ({ isLoading, ...rest }) => {
	return (
		<button type="button" {...rest} disabled={isLoading}>
			enviar
		</button>
	)
}

export default Button
