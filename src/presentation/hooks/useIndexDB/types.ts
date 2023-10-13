export type DBProps = {
	column: string
	transition: 'readwrite' | 'readonly' | 'versionchange'
}

export type AddProps = {
	data: object
} & DBProps

export type DeleteProps = {
	id: number
} & DBProps
