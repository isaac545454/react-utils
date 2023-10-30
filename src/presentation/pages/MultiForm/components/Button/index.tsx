import React from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
	isLoading: boolean
	save: React.ComponentProps<'button'>
	redirect: React.ComponentProps<typeof Link>
}

const Button: React.FC<ButtonProps> = ({ isLoading, save, redirect }) => {
	return (
		<>
			<button type="button" {...save} disabled={isLoading}>
				enviar
			</button>
			<Link {...redirect}>aa</Link>
		</>
	)
}

export default Button
