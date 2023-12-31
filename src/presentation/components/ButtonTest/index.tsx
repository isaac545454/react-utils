type ButtonProps = React.ComponentProps<'button'> & {
	size?: 'sm' | 'md' | 'lg'
	color?: 'primary' | 'secondary' | 'tertiary'
	variant?: 'solid' | 'outline' | 'ghost'
}

const sizeClasses = {
	sm: 'text-sm px-2 py-1',
	md: 'text-base px-4 py-2',
	lg: 'text-lg px-6 py-3',
}

const colorClasses = {
	primary: 'bg-blue-500 text-white',
	secondary: 'bg-green-500 text-white',
	tertiary: 'bg-gray-500 text-white',
}

const variantClasses = {
	solid: 'rounded-md',
	outline: 'border border-solid border-current rounded-md',
	ghost: 'rounded-md',
}

export const Button = (props: ButtonProps) => {
	const { size = 'md', color = 'primary', variant = 'solid', ...res } = props
    return <button {...res}
        className={`
        ${sizeClasses[size]} 
        ${colorClasses[color]} 
        ${variantClasses[variant]}`
        }
        />
}
