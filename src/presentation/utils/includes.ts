//-1
// const verification = (ProjectProgressStatus: string): void => {
// 	if (
// 		ProjectProgressStatus === 'aprovado' ||
// 		ProjectProgressStatus === 'reprovado' ||
// 		ProjectProgressStatus === 'pendente'
// 	) {
// 		console.log('contem status')
// 	}
// }

//- 2
const PROJECT_STATUS_OBJ = {
	aprovado: 'aprovado',
	reprovado: 'reprovado',
	pendente: 'pendente',
} as const

const PROJECT_STATUS: ReadonlyArray<string> = Object.values(PROJECT_STATUS_OBJ)

type ProjectStatus = (typeof PROJECT_STATUS)[number]

const verification = (ProjectProgressStatus: ProjectStatus): void => {
	if (!PROJECT_STATUS.includes(ProjectProgressStatus)) return console.log('não contém status')
	if (ProjectProgressStatus === PROJECT_STATUS_OBJ.aprovado) return console.log('aprovado')
}
