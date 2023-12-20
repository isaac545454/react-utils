import { useState } from 'react'
import { CardPeding, CardReviewed } from './test'

export const PROJECT_STATUS = {
	approved: 'aprovado',
	rejected: 'reprovado',
	pending: 'pendente',
} as const

type ProjectStatusValues = (typeof PROJECT_STATUS)[keyof typeof PROJECT_STATUS]

export const AppPage = () => {
	const [state, setState] = useState<ProjectStatusValues>(PROJECT_STATUS.approved)
	return (
		<div>
			<div>
				{state === PROJECT_STATUS.pending ? (
					<div>
						<div>{/* {code} */}</div>
					</div>
				) : (
					<div>
						<div>{/* {code} */}</div>
					</div>
				)}
			</div>
		</div>
	)
}

export const App = () => {
	const [state, setState] = useState<ProjectStatusValues>(PROJECT_STATUS.approved)
	const isPeding = state === PROJECT_STATUS.pending

	return (
		<div>
			<div>
				{isPeding && <CardPeding />}
				{!isPeding && <CardReviewed />}
			</div>
		</div>
	)
}

if (true) {
	//
} else {
	//code
}

//code
