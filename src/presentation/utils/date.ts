export const formatDateToBR = (date: Date): string => {
	return new Intl.DateTimeFormat('pt-BR').format(date)
}

export const formatDateToISO = (date: Date): string => {
	return date.toISOString().split('T')[0]
}

export const formatDateToBRShort = (date: Date): string => {
	return new Intl.DateTimeFormat('pt-BR', {
		day: '2-digit',
		month: '2-digit',
	}).format(date)
}

const formatDateToBRWithoutYear = (date: Date): string => {
	return new Intl.DateTimeFormat('pt-BR', {
		day: '2-digit',
		month: 'long',
	}).format(date)
}

const shortDateFormatters = {
	formatToBR: formatDateToBR,
	formatToISO: formatDateToISO,
	formatToBRWithoutYear: formatDateToBRWithoutYear,
	formatToBRShort: formatDateToBRShort,
}

const currentDate = new Date()
console.log({
	formatToBR: shortDateFormatters.formatToBR(currentDate),
	formatToISO: shortDateFormatters.formatToISO(currentDate),
	formatToBRWithoutYear: shortDateFormatters.formatToBRWithoutYear(currentDate),
	formatToBRShort: shortDateFormatters.formatToBRShort(currentDate),
})

// {
//   "formatToBR": "01/01/2024",
//   "formatToISO": "2024-01-01",
//   "formatToBRWithoutYear": "01 de janeiro",
//   "formatToBRShort": "01/01"
// } 