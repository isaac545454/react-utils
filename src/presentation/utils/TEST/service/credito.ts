import { PaymentMethod } from '..'

export const Correios = (): PaymentMethod => {
	const calculateCost = (distance: number) => distance + 8
	const taxationRate = 6

	return { calculateCost, taxationRate }
}
