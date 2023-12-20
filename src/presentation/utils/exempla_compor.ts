const generatePDF = ({ name, email, phone }: F): string => {
	console.log('====================================')
	console.log(name, email, phone)
	return 'confirm'
}

const generateHistory = (action: string) => {
	console.log('====================================')
	console.log(action)
	console.log('====================================')
	return 'sucesso'
}

const generateConfirmation = (result: string) => {
	console.log('====================================')
	console.log(result)
	console.log('====================================')
	return 'action'
}

type ConfirmParams = string
type HistoryParams = string
type ProcessResult = string

type FileParams = {
	name: string
	phone: string
	email: string
}

type FileConfirmationHistoryOperations = {
	File: (name: FileParams) => ConfirmParams
	Confirm: (result: ConfirmParams) => HistoryParams
	History: (action: HistoryParams) => ProcessResult
}

const createProcess = ({ Confirm, File, History }: FileConfirmationHistoryOperations) => {
	// return (name: string) => History(Confirm(File(name)))
	return (data: FileParams) => {
		const file = File(data)
		const confirm = Confirm(file)
		const history = History(confirm)
		return history
	}
}

const generatePDFProcess = createProcess({
	File: generatePDF,
	History: generateHistory,
	Confirm: generateConfirmation,
})

generatePDFProcess({ email: 'isaac.teste@gmail.com', name: 'isaac', phone: '1196666666' })
