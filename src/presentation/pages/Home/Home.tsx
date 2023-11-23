import { useHome } from './hook'
import { Fragment, ElementRef, useRef } from 'react'

import { Input } from '../../components/atoms/Input'
import { FileType, fileGenerator } from '../../utils/file'

export const Home = () => {
	const { showModal } = useHome()
	const a = fileGenerator(FileType.WORD)
	console.log(a)

	return (
		<Fragment>
			<Input.Text />
			<Input.Text />
		</Fragment>
	)
}

// atalhos
