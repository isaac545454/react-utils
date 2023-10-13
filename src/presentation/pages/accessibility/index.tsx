import { FormEvent, useId } from 'react'
import { Modal } from '../../components/Modal'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Error } from '../../components/atoms/Error'

const getAllPromise = async () => {
	const results = await Promise.all([
		await axios.get('https://rickandmortyapi.com/api/character'),
		await axios.get('https://jsonplaceholder.typicode.com/post'),
	])

	return results.map(item => item.data)
}

export function Accessibility() {
	const { isError } = useQuery(['all'], getAllPromise)

	const id = useId()

	const onSubmit = (e: FormEvent) => {
		e.preventDefault()
	}

	if (isError) {
		return <Error mensagem={'eeeo'} />
	}

	return (
		<>
			<header>
				<nav>
					<Link to="/abolt" aria-label="Clique para acessar a página Sobre">
						acessar
					</Link>
				</nav>
			</header>
			<main>
				<form onSubmit={onSubmit}>
					<img src="imagem.jpg" alt="Pintura abstrata" role="presentation" />
					<label htmlFor={id}>Digite um texto:</label>
					<input type="text" id={id} className="focus:bg-red-300" />
					<button aria-label="Adicionar ao carrinho" type="submit">
						ADICIONAR
					</button>
				</form>

				<a href="#" aria-label="Link para algum lugar" className="focus:text-green-600">
					Link
				</a>
				<p id="titulo-modal">Título da Janela Modal</p>
				<Modal.Container aria-labelledby="titulo-modal" showModal={false}>
					<div></div>
				</Modal.Container>
			</main>
			<footer>footer</footer>
		</>
	)
}
