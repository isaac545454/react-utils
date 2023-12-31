import { TypeFormSubmit } from '@pages/MultiForm/types'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/atoms/Input'

export const Aboult = ({}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext<TypeFormSubmit>()

	return (
		<div>
			<Input.Label>
				<Input.Text {...register('Aboult.description')} />
				<Input.Error errors={errors} name="Aboult.description" />
			</Input.Label>
		</div>
	)
}
