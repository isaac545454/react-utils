import { handleCreateUser } from '@/presentation/utils/clean'
import { CreateUser } from '@/presentation/utils/resolve'
import React, { Fragment, useState } from 'react'

export const Home = () => {
	const a = handleCreateUser({
		email: 'test@gmail.com',
		name: 'isaac',
		password: '123456',
	})
	console.log(a)
	CreateUser()

	return <Fragment></Fragment>
}
