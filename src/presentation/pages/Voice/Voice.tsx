import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export function Voice() {
	const email = useRef<HTMLTextAreaElement>(null)
	const navigate = useNavigate()

	const handle = () => {
		if (!email || !email.current?.value) return

		console.log(email.current.value)
		navigate(`/xss?q=${email.current.value}`)
		// const utterance = new SpeechSynthesisUtterance(email.current?.value)
		// const synth = window.speechSynthesis
		// synth.speak(utterance)
	}

	return (
		<div>
			<textarea
				ref={email}
				className="w-4/5 mt-2 h-10 rounded-lg bg-dark-900   p-4 border border-gray-200 placeholder:text-gray-400 "
			/>
			<button onClick={handle}>enviar</button>
		</div>
	)
}
