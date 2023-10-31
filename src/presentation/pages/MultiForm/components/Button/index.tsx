import React from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
	isLoading: boolean
	save: React.ComponentProps<'button'>
	redirect: React.ComponentProps<typeof Link>
	as?: React.ElementType
}

const Button: React.FC<ButtonProps> = props => {
	const { as: Component = 'button', isLoading, save, redirect } = props

	return (
		<>
			<Component type="button" {...save} disabled={isLoading}>
				enviar
			</Component>
			<Link {...redirect} />
		</>
	)
}

export default Button
