import React, { useReducer } from 'react'

type TypeAction = 'increment' | 'decrement' | 'reset'
type Action = { type: TypeAction }

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 }
		case 'decrement':
			return { count: state.count - 1 }
		case 'reset':
			return { count: 0 }
		default:
			return state
	}
}

export const Reducer: React.FC = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 })

	const handleClick = (type: TypeAction) => dispatch({ type: type })

	return (
		<div>
			<p>Contagem: {state.count}</p>
			<button onClick={() => handleClick('decrement')}>Decrementar</button>
			<button onClick={() => handleClick('reset')}>Resetar</button>
			<button onClick={() => handleClick('increment')}>Incrementar</button>
		</div>
	)
}
