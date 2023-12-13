type Cart = {
	prince: number
	name: string
}

type CartMethods = {
	getProducts: () => Array<string>
	getPrinces: () => Array<Number>
	getAmount: () => number
}

const Mock: Cart[] = [
	{ name: 'chocolate', prince: 7 },
	{ name: 'bala de goma', prince: 3 },
	{ name: 'brigadeiro', prince: 5 },
]

export const cart = (products: Cart[]): CartMethods => {
	const getProducts = (): Array<string> => {
		return products.map(item => item.name)
	}

	const getPrinces = (): Array<number> => {
		return products.map(item => item.prince)
	}

	const getAmount = (): number => {
		return products.reduce((accumulator, currentValue) => {
			return accumulator + currentValue.prince
		}, 0)
	}

	return { getProducts, getAmount, getPrinces }
}

describe('cart', () => {
	let CartTest: CartMethods
	beforeEach(() => (CartTest = cart(Mock)))

	test('should return an array of product names', () => {
		const products = CartTest.getProducts()
		expect(products.length).toBe(Mock.length)
		expect(products[0]).toBe(Mock[0]?.name)
	})
	test('should return an array of prices', () => {
		const princes = CartTest.getPrinces()
		expect(princes.length).toBe(Mock.length)
		expect(princes[0]).toBe(Mock[0]?.prince)
	})
	test('should return the total amount of products in the cart', () => {
		const amount = CartTest.getAmount()
		let mockTotalPrice: number = 0
		Mock.forEach(item => (mockTotalPrice += item.prince))
		expect(amount).toBe(mockTotalPrice)
	})
})
