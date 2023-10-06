import { FormEvent, useId } from 'react'
import { Modal } from '../../components/Modal'
import { Link } from 'react-router-dom'

export function accessibility() {
	const id = useId()

	const onSubmit = (e: FormEvent) => {
		e.preventDefault()
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
					<img
						src="imagem.jpg"
						alt="Pintura abstrata"
						aria-label="Pintura abstrata criada por John Doe em 2023"
						decoding="sync"
						onError={e => {
							e.target.src = 'caminho_da_imagem_de_substituicao.jpg'
							e.target.alt = 'Imagem de substituição'
						}}
					/>
					<label htmlFor={id}>Digite um texto:</label>
					<input type="text" id={id} className="focus:bg-red-300" />

					<button aria-label="Adicionar ao carrinho">ADICIONAR</button>
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
