import { useMultiFormModel } from './Model/useMultiFormModel'
import { MultiFormView } from './View'

export const MultiForm = () => <MultiFormView {...useMultiFormModel()} />
