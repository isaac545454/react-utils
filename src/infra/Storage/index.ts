import { StorageInterface } from './types'

export const Storage = (storage: StorageInterface) => {
	const setItem = (key: string, value: unknown) => {
		try {
			storage.setItem(key, JSON.stringify(value))
		} catch (error) {
			console.error(error)
		}
	}

	const getItem = (key: string) => {
		try {
			const item = storage.getItem(key)
			if (!item) return undefined
			return JSON.parse(String(item))
		} catch (error) {
			console.error(error)
		}
	}

	const removeItem = (key: string) => {
		try {
			storage.removeItem(key)
		} catch (error) {
			console.error(error)
		}
	}

	return {
		setItem,
		getItem,
		removeItem,
	}
}
