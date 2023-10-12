export interface StorageInterface {
	setItem(key: string, value: unknown): void
	getItem(key: string): unknown | undefined
	removeItem(key: string): void
}
