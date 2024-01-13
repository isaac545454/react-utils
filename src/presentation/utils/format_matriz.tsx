const data = {
	frutas: ['Maçã', 'Banana', 'Morango'],
	legumes: ['Cenoura', 'Brócolis', 'Abobrinha'],
	bebidas: ['Água', 'Suco de Laranja', 'Refrigerante'],
}

Object.entries(data).forEach(([key, value]) => {
	console.log(`Chave: ${key}, Valor: ${value}`)
})
//"Chave: frutas, Valor: Maçã,Banana,Morango"
//"Chave: legumes, Valor: Cenoura,Brócolis,Abobrinha"
//"Chave: bebidas, Valor: Água,Suco de Laranja,Refrigerante"

const matriz = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

const resultado = matriz.flatMap(linha => linha)
//[1, 2, 3, 4, 5, 6, 7, 8, 9]

const Status = {
	IN_PROGRESS: 'IN_PROGRESS',
	COMPLETED: 'COMPLETED',
	FAILED: 'FAILED',
} as const

const statusParse = {
	[Status.COMPLETED]: { text: 'projeto completo', variant: 'Success', handle: () => alert('Success') },
	[Status.FAILED]: { text: 'projeto rejeitado', variant: 'Rejected', handle: () => alert('Rejected') },
	[Status.IN_PROGRESS]: { text: 'em progresso', variant: 'Progress', handle: () => alert('IN_PROGRESS') },
}
const data_Test = [{ status: Status.COMPLETED }, { status: Status.FAILED }]

const Test = () => {
	return (
		<>
			{data_Test.map(item => (
				<p variant={statusParse[item.status].variant} onClick={statusParse[item.status].handle}>
					{statusParse[item.status].text}
				</p>
			))}
		</>
	)
}
