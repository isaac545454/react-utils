import { handleCreateUser } from '@/presentation/utils/clean'
import { CreateUser } from '@/presentation/utils/resolve'
import React, { Fragment, useState } from 'react'

const matriz = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

const resultado = matriz.flatMap(linha => linha)

export const Home = () => {
	const a = handleCreateUser({
		email: 'test@gmail.com',
		name: 'isaac',
		password: '123456',
	})
	console.log(resultado)
	CreateUser()

	return <Fragment></Fragment>
}
