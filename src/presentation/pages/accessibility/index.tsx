import { FormEvent, useId } from 'react'

export function accessibility() {
	const id = useId()

	const onSubmit = (e: FormEvent) => {
		e.preventDefault()
	}

	return (
		<div>
			<header>
				<nav>
					<li>acessar</li>
				</nav>
			</header>
			<main>
				<form onSubmit={onSubmit}>
					<img src="https://miro.medium.com/v2/resize:fit:2944/1*ymbnPv2w9jxDxxS5SQAkTQ.png" alt="clean architecture" />

					<label htmlFor={id}>
						<input type="text" id={id} className="focus:bg-red-300" />
					</label>

					<button aria-label="Adicionar ao carrinho">ADICIONAR</button>
				</form>
				<a href="#" className="focus:text-green-600">
					Link
				</a>
			</main>
			<footer>footer</footer>
		</div>
	)
}
