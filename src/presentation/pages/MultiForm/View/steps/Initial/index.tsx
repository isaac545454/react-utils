import { TypeFormSubmit } from '@pages/MultiForm/types'
import { Input } from '../../../../components/atoms/Input'
import { useFormContext } from 'react-hook-form'

export const Initial = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<TypeFormSubmit>()

	return (
		<div>
			<Input.Label>
				<Input.Text {...register('Initial.name')} />
				<Input.Error errors={errors} name="Initial.name" />
			</Input.Label>
			<Input.Label>
				<Input.Text {...register('Initial.lastname')} />
				<Input.Error errors={errors} name="Initial.lastname" />
			</Input.Label>
		</div>
	)
}
