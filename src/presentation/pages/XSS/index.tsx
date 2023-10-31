import React, { useReducer } from 'react'

enum TypeAction {
	'INCREMENT',
	'DECREMENT',
	'RESET',
	'ADD_TEN',
}

const reducer = (state: State, type: TypeAction): State => {
	switch (type) {
		case TypeAction.INCREMENT:
			return { count: state.count + 1 }
		case TypeAction.DECREMENT:
			return { count: state.count - 1 }
		case TypeAction.RESET:
			return { count: 0 }
		case TypeAction.ADD_TEN:
			return { count: state.count + 10 }
		default:
			return state
	}
}

export const Reducer: React.FC = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 })

	const handleClick = (type: TypeAction) => dispatch(type)

	return (
		<div>
			<p>Contagem: {state.count}</p>
			<button onClick={() => handleClick(TypeAction.DECREMENT)}>Decrementar</button>
			<button onClick={() => handleClick(TypeAction.RESET)}>Resetar</button>
			<button onClick={() => handleClick(TypeAction.INCREMENT)}>Incrementar</button>
			<button onClick={() => handleClick(TypeAction.ADD_TEN)}>somar 10</button>
		</div>
	)
}
