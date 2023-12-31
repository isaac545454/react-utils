const fruitsArray = ['Maçã', 'Banana', 'Laranja', 'Morango']

const isValidArray = (food: string) => {
	if (fruitsArray.includes(food)) return console.log('fruit')
}

const fruitsSet = new Set(['Maçã', 'Banana', 'Laranja', 'Morango'])

const isValidSet = (food: string) => {
	if (fruitsSet.has(food)) return console.log('fruit')
}
