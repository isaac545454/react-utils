import { PaymentMethod } from '..'

export const Evergreen = (): PaymentMethod => {
	const calculateCost = (distance: number) => distance + 5
	const taxationRate = 2
	return { calculateCost, taxationRate }
}
