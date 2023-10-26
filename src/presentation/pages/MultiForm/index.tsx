import { FormProvider, useFormContext } from 'react-hook-form'
import { Aboult } from './steps/Aboult'
import { Initial } from './steps/Initial'
import { Contact } from './steps/Contact'
import { useState } from 'react'

export const MultiForm = () => {
	const methods = useFormContext()
	const [state, setState] = useState(0)

	const onSubmit = (key: string) => {}

	const steps = [<Initial />, <Aboult />, <Contact />]

	return (
		<FormProvider {...methods}>
			<div>{steps[state]}</div>
		</FormProvider>
	)
}
