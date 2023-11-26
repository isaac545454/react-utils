// type FileParams = { word?: string, pdf?: string }

// type FileGeneratorWord = {
// 	type: typeof FileType.WORD
// 	params: FileParams
// }

// type FileGeneratorPdf = {
// 	type: typeof FileType.PDF
// 	params: FileParams
// }

export const FileType = {
	WORD: 'word',
	PDF: 'pdf',
} as const

export type FileTypeValue = (typeof FileType)[keyof typeof FileType]

const fileGeneratorWord = ({ params: { word } }: FileGeneratorWord) => {
	return console.log(word)
}
const fileGeneratorPdf = ({ params: { pdf } }: FileGeneratorPdf) => {
	return console.log(pdf)
}

type FileGeneratorWord = {
	type: typeof FileType.WORD
	//type: "word"
	params: { word: string }
}

type FileGeneratorPdf = {
	type: typeof FileType.PDF
	// type: "pdf"
	params: { pdf: string }
}

type FileGeneratorParams = FileGeneratorWord | FileGeneratorPdf

export const fileGenerator = (props: FileGeneratorParams) => {
	switch (props.type) {
		case FileType.PDF:
			return fileGeneratorPdf(props)
		case FileType.WORD:
			return fileGeneratorWord(props)
	}
}
