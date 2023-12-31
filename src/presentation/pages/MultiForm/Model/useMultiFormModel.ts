import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '../schemas/root'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetMultiForm } from '../../../query/MultiForm/get'
import { useCreateMultiForm } from '../../../query/MultiForm/post'
import { SubmitData } from '../types/shemaType'
import { steps } from '../View'

export const useMultiFormModel = () => {
	const { id } = useParams()
	const methods = useForm<SubmitData>({ resolver: zodResolver(schema) })
	const { mutate: creation, isLoading: creationLoading } = useCreateMultiForm({ id })
	const { isError, isLoading } = useGetMultiForm({ methods, id: id ?? '' })
	const [state, setState] = useState(0)

	const onSubmit = async () => {
		const key = steps[state].key

		const valid = await methods.trigger(key)
		if (!valid) return

		const isNotLastStep = key !== steps[steps.length - 1].key
		if (isNotLastStep) return setState(state => state + 1)

		creation(methods.getValues())
	}

	return { methods, creationLoading, isLoading, isError, onSubmit, idExist: !!id, state }
}
