import { SubmitData } from '@pages/MultiForm/types'
import { useHttpQuery } from '../../hooks/useHttpQuery'
import { UseFormReturn } from 'react-hook-form'
import { endpoint } from '../../../infra/Http/HttpClient/endpoint-http'

type GetMultiFormProps = {
	methods: UseFormReturn<SubmitData>
	id: string
}

export const useGetMultiForm = ({ id, methods }: GetMultiFormProps) => {
	return useHttpQuery<SubmitData>({
		queryKey: ['getForm'],
		HttpService: { endpoint: endpoint.getForm },
		options: {
			enabled: !!id,
			onSettled: data => data && methods.reset(data),
		},
	})
}
