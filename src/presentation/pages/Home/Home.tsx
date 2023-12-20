import { handleCreateUser } from '@/presentation/utils/clean'
import React, { Fragment, useState } from 'react'

export const Home = () => {
	const a = handleCreateUser({
		email: 'test@gmail.com',
		name: 'isaac',
		password: '123456',
	})
	console.log(a)

	return <Fragment></Fragment>
}
