// Função imperativa para calcular a soma dos quadrados dos números pares em um array

function imperativa(arrayItens: Array<number>) {
	let sum = 0

	arrayItens.forEach(number => {
		if (number % 2 === 0) {
			const square = number * number
			sum += square
		}
	})

	return sum
}

function declarativa(arrayItens: Array<number>) {
	const isEven = (number: number) => number % 2 === 0
	const square = (number: number) => number * number

	const sum = arrayItens
		.filter(isEven)
		.map(square)
		.reduce((acc, value) => acc + value, 0)

	return sum
}
