import { lazy } from 'react'
import { FormSteps } from './types'

const AboutStep = lazy(() => import('./steps/Aboult').then(module => ({ default: module.Aboult })))
const InitialStep = lazy(() => import('./steps/Initial').then(module => ({ default: module.Initial })))
const ContactStep = lazy(() => import('./steps/Contact').then(module => ({ default: module.Contact })))

export const steps = [
	{ step: <InitialStep />, key: FormSteps.Initial },
	{ step: <ContactStep />, key: FormSteps.Contact },
	{ step: <AboutStep />, key: FormSteps.Aboult },
]
