// const verification = (ProjectProgressStatus: string): string => {
// 	if (ProjectProgressStatus === 'aprovado' || ProjectProgressStatus === 'reprovado') {
// 		return 'contem status'
// 	}

// 	return 'não avaliado'
// }

//- 2

export enum PROJECT_STATUS {
	aprovado = 'aprovado',
	reprovado = 'reprovado',
	pendente = 'pendente',
}

const isStatusApprovedOrRejected = (ProjectProgressStatus: PROJECT_STATUS): boolean => {
	return [PROJECT_STATUS.aprovado, PROJECT_STATUS.reprovado].includes(ProjectProgressStatus)
}

export const verification = (ProjectProgressStatus: PROJECT_STATUS): string => {
	if (!isStatusApprovedOrRejected(ProjectProgressStatus)) return 'não avaliado'

	return 'avaliado'
}

console.log(verification(PROJECT_STATUS.pendente))
