// Interface que define a pizza
interface Pizza {
	getDescription(): string
	cost(): number
}

// Implementação da pizza base
class BasicPizza implements Pizza {
	getDescription() {
		return 'Pizza básica'
	}

	cost() {
		return 10 // Preço da pizza base
	}
}

// Decorator base
abstract class PizzaDecorator implements Pizza {
	constructor(private readonly pizza: Pizza) {}

	getDescription() {
		return this.pizza.getDescription()
	}

	cost() {
		return this.pizza.cost()
	}
}

// Decorador concreto que adiciona queijo
class CheeseDecorator extends PizzaDecorator {
	constructor(pizza: Pizza) {
		super(pizza)
	}

	getDescription() {
		return `${super.getDescription()}, com queijo`
	}

	cost() {
		return super.cost() + 2 // Preço adicional para o queijo
	}
}

// Decorador concreto que adiciona pepperoni
class PepperoniDecorator extends PizzaDecorator {
	constructor(pizza: Pizza) {
		super(pizza)
	}

	getDescription() {
		return `${super.getDescription()}, com pepperoni`
	}

	cost() {
		return super.cost() + 3 // Preço adicional para o pepperoni
	}
}

// Uso dos decoradores
let pizza: Pizza = new BasicPizza()
console.log(pizza.getDescription()) // Pizza básica
console.log(`Custo: $${pizza.cost()}`)

pizza = new CheeseDecorator(pizza)
console.log(pizza.getDescription()) // Pizza básica, com queijo
console.log(`Custo: $${pizza.cost()}`)

pizza = new PepperoniDecorator(pizza)
console.log(pizza.getDescription()) // Pizza básica, com queijo, com pepperoni
console.log(`Custo: $${pizza.cost()}`)
