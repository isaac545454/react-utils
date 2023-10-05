import { FormEvent, useRef, useState } from 'react'
import { Input } from '../../components/atoms/Input/Element'

export function Example() {
	const uncontrolled = useRef<HTMLInputElement>(null)
	const [controlled, setControlled] = useState('')

	const handleSubmitForm = (e: FormEvent) => {
		e.preventDefault()

		if (!controlled || !uncontrolled.current?.value) return

		console.log({
			controlledValue: controlled,
			uncontrolledValue: uncontrolled.current.value,
		})
	}

	return (
		<div>
			<form onSubmit={handleSubmitForm}>
				<Input name="uncontrolled" ref={uncontrolled} />

				<Input name="controlled" value={controlled} onChange={e => setControlled(e.target.value)} />
				<button type="submit">TESTAR</button>
			</form>
		</div>
	)
}
