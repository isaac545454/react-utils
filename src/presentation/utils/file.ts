export const fileGenerator = (type: string, params: FileParams) => {
	if (type === 'word') {
		console.log('word')
		//code
	}
	if (type === 'pdf') {
		console.log('pdf')
	}
}

// export enum FileType {
// 	WORD = 'word',
// 	PDF = 'pdf',
// }

// const fileGeneratorWord = ({ test }: FileParams) => console.log(test)
// const fileGeneratorPdf = ({ test }: FileParams) => console.log(test)

// const fileGeneratorsMap = {
// 	[FileType.WORD]: fileGeneratorWord,
// 	[FileType.PDF]: fileGeneratorPdf,
// }

type FileParams = {
	test: string
}

// type FileGeneratorParams = {
// 	type: FileType
// 	params: FileParams
// }

// export const fileGenerator = ({ params, type }: FileGeneratorParams) => {
// 	return fileGeneratorsMap[type](params)
// }
