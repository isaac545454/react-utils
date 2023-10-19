function criarArrayDeObjetos(numeroDeItens: number) {
	const arrayDeObjetos = []

	for (let i = 1; i <= numeroDeItens; i++) {
		arrayDeObjetos.push({
			id: i,
			nome: `Item ${i}`,
			descricao: `Descrição do Item ${i}`,
		})
	}

	return arrayDeObjetos
}

// Exemplo de uso: criar um array com 50 itens
export const meuArray = criarArrayDeObjetos(50)
