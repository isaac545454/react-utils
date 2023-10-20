import React from 'react'
import { meuArray } from '../../utils/generate'

export const ArrayPage = () => {
	return (
		<div>
			<div>{React.Children.toArray(meuArray.map(item => <div>{item.descricao}</div>))}</div>
			<div>
				{meuArray.map(item => (
					<div>{item.descricao}</div>
				))}
			</div>
		</div>
	)
}
