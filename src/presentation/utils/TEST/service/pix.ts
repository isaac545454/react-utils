import { PaymentMethod } from '..'

export const DPD = (): PaymentMethod => {
	const calculateCost = (distance: number) => distance + 3
	const taxationRate = 10
	return { calculateCost, taxationRate }
}
