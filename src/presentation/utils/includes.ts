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
const PROJECT_STATUS = ['aprovado', 'reprovado', 'pendente'] as const
type ProjectStatus = (typeof PROJECT_STATUS)[number]

const verification = (ProjectProgressStatus: ProjectStatus): void => {
	if (PROJECT_STATUS.includes(ProjectProgressStatus)) {
		console.log('contem status')
	}
}
