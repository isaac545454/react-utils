// const verification2 = (ProjectProgressStatus: string): string => {
// 	if (ProjectProgressStatus === 'aprovado' || ProjectProgressStatus === 'reprovado') {
// 		return 'contem status'
// 	}

// 	return 'não avaliado'
// }

//- 2

export enum PROJECT_STATUS {
	approved = 'aprovado',
	rejected = 'reprovado',
	pending = 'pendente',
}

// export const getStatusString = (projectStatus: PROJECT_STATUS): string => {
// 	const isApproved = projectStatus === PROJECT_STATUS.approved
// 	const isRejected = projectStatus === PROJECT_STATUS.rejected
// 	const isPending = projectStatus === PROJECT_STATUS.pending

// 	if (isApproved) return 'Approved'
// 	if (isRejected) return 'Rejected'
// 	if (isPending) return 'Pending'

// 	return 'Not included'
// }

// export const PROJECT_STATUS = {
// 	approved: 'aprovado',
// 	rejected: 'reprovado',
// 	pending: 'pendente',
// } as const

type ProjectStatus = keyof typeof PROJECT_STATUS

export const getStatusString = (projectStatus: ProjectStatus): string => {
	return PROJECT_STATUS[projectStatus] ?? 'Not included'
}

console.log(getStatusString('approved'))
