import { faker } from '@faker-js/faker'
import { AiFillAmazonCircle } from 'react-icons/ai'

export type Soma = {
	y: number
	x: number
}

export const soma = ({ x, y }: Soma): number => {
	return x + y
}

test('soma', () => {
	const numbers = {
		x: faker.number.int(),
		y: faker.number.int(),
	}
	const result = soma(numbers)
	expect(result).toBe(numbers.x + numbers.y)
})
