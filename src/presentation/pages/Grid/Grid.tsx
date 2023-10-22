import React from 'react'
import { GridInput } from '../../components/GridInput'
import { Input } from '../../components/atoms/Input'
import { useGrid } from './hook'

type Props = {
	state: string
}

export const Grid = React.memo(({ state }: Props) => {
	const { handleSubmit, register, onSubmit } = useGrid()

	return (
		<>
			<GridInput onSubmit={handleSubmit(onSubmit)}>
				<>
					<h1>{state}</h1>
					<Input.Text {...register('name')} />
					<Input.Text {...register('email')} />
				</>
			</GridInput>
		</>
	)
})
