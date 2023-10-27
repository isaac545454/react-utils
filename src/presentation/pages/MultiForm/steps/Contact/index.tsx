import { TypeFormSubmit } from '@pages/MultiForm/types'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/atoms/Input'

export const Contact = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<TypeFormSubmit>()

	return (
		<div>
			<Input.Label>
				<Input.Text {...register('Contact.phone')} />
				<Input.Error errors={errors} name="Contact.phone" />
			</Input.Label>
		</div>
	)
}
