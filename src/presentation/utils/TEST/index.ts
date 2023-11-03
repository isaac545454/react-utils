export type PaymentMethod = {
	calculateCost: (distance: number) => number
	taxationRate: number
}

export type Product = {
	distance: number
}

type PurchaseProps = {
	paymentCalculator: () => PaymentMethod
} & Product

export const calculateCost = ({ paymentCalculator, distance }: PurchaseProps) => {
	const Calculator = paymentCalculator()
	return Calculator.calculateCost(distance)
}
