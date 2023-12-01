import { Dispatch, createContext, useContext, useReducer } from 'react'

type ContextTest = {
	cartState: CartState
	dispatch: Dispatch<CartAction>
}

export const CartContext = createContext({} as ContextTest)

export type CartItem = {
	id: string
	name: string
}

type CartState = { items: CartItem[] }

export const types = {
	add: 'ADD_ITEM',
	remove: 'REMOVE_ITEM',
} as const

export type CartAction =
	| { type: typeof types.add; payload: CartItem }
	| { type: typeof types.remove; payload: CartItem }

type CartParams = {
	state: CartState
	action: CartAction
}

type Props = { children: React.ReactNode }

const handleADD = ({ action, state }: CartParams): CartState => {
	return { ...state, items: [...state.items, action.payload] }
}

const handleDELETE = ({ action, state }: CartParams): CartState => {
	return { ...state, items: state.items.filter(item => item.id !== action.payload.id) }
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
	switch (action.type) {
		case types.add:
			return handleADD({ state, action })
		case types.remove:
		// return handleDELETE({ state, action })
		default:
			return state
	}
}

export function CartProvider({ children }: Props) {
	const [cartState, dispatch] = useReducer(cartReducer, { items: [] })

	return <CartContext.Provider value={{ cartState, dispatch }}>{children}</CartContext.Provider>
}

export const useContextCart = () => useContext(CartContext)

//
const { cartState, dispatch } = useContextCart()

dispatch({
	type: types.add,
	payload: { id: '1', name: 'test' },
})

declare function Test(params: string): { foo: string } {
	return { foo: 'aaa' }
}
