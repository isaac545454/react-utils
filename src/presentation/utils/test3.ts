// Defina o tipo de estado
type State = {
	count: number
}

type Action = { type: 'increment' } | { type: 'decrement' }

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 }
		case 'decrement':
			return { count: state.count - 1 }
		default:
			return state
	}
}
