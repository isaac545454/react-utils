import { useHome } from './hook'
import { Fragment, ElementRef, useRef } from 'react'

import { Input } from '../../components/atoms/Input'
import { FileType, fileGenerator } from '../../utils/file'
import { types, useContextCart } from '@/presentation/context/cart'

export const Home = () => {
	const { showModal } = useHome()
	const { cartState, dispatch } = useContextCart()

	dispatch({
		type: types.add,
		payload: { id: '1', name: 'test' },
	})

	return (
		<Fragment>
			<Input.Text />
			<Input.Text />
		</Fragment>
	)
}

// atalhos
