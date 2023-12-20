import React from 'react'

const data = [
	{ id: 1, name: 'isaac' },
	{ id: 2, name: 'isaac' },
	{ id: 3, name: 'isaac' },
	{ id: 4, name: 'isaac' },
]

export const example1: React.FC = () => {
	return (
		<div>
			{data.map(item => (
				<div key={Math.random()}>{item.name}</div>
			))}
		</div>
	)
}

export const example2: React.FC = () => {
	return <div>{React.Children.toArray(data.map(item => <div>{item.name}</div>))}</div>
}
