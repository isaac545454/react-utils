// Definindo a estrutura do objeto
interface Person {
	name: string
	lastName: string
	id: number
}

// Criando um array de objetos
const people: Person[] = [
	{ name: 'John', lastName: 'Doe', id: 1 },
	{ name: 'Jane', lastName: 'Doe', id: 2 },
	{ name: 'Alice', lastName: 'Smith', id: 3 },
	// Adicione mais objetos conforme necessário
]

const createFilterByName = (name: string) => (item: Person) => item.name === name
const filterJohn = people.filter(createFilterByName('John'))
