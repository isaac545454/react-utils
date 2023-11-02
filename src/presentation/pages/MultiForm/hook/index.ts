import { useForm } from 'react-hook-form'
import { SubmitData } from '../types'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '../schemas'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { steps } from '../steps'
import { useEffect } from 'react'
import { useGetMultiForm } from '../../../query/MultiForm/get'
import { useCreateMultiForm } from '../../../query/MultiForm/post'
import { localStorageFactory } from '../../../factories/localStorageFactory'

export const useMultiForm = () => {
	const { id } = useParams()
	const { getItem, setItem } = localStorageFactory()
	const methods = useForm<SubmitData>({ resolver: zodResolver(schema) })
	const { mutate: creation, isLoading: creationLoading } = useCreateMultiForm({ id })
	const { isError, isLoading } = useGetMultiForm({ methods, id: id ?? '' })
	const [state, setState] = useState(0)

	const onSubmit = async () => {
		const key = steps[state].key
		const valid = await methods.trigger(key)
		if (!valid) return
		if (key !== steps[steps.length - 1].key) return setState(state => state + 1)
		creation(methods.getValues())
	}

	useEffect(() => {
		const data = getItem('form')
		if (data && !!id) methods.reset(data.form)
		return () => setItem('form', { form: methods.getValues(), step: state })
	}, [])

	return {
		methods,
		creationLoading,
		isLoading,
		isError,
		onSubmit,
		idExist: !!id,
		state,
	}
}
