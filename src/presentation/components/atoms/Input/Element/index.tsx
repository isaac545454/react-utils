import { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react'
// import { InputProps } from '../types'
import { styles } from '../styles'

type TestProps = {
	value?: string
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	disabled: boolean
}

export const Test = ({ onChange, value, disabled }: TestProps) => {
	return <Input onChange={onChange} value={value} disabled={disabled} />
}

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <input ref={ref} {...props} className={styles.Input} onChange={e => e} />
})
