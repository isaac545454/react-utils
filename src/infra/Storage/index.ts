import { StorageInterface } from './types'
import Cookies from 'js-cookie'

export interface StorageInterface {
	setItem(key: string, value: unknown): void
	getItem(key: string): unknown | undefined
	removeItem(key: string): void
}

export const Storage = (storage: StorageInterface): StorageInterface => {
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

export class StorageManage implements StorageInterface {
	constructor(private readonly storage: StorageInterface) {}

	setItem(key: string, value: unknown): void {
		try {
			this.storage.setItem(key, JSON.stringify(value))
		} catch (error) {
			console.error(error)
		}
	}
	getItem(key: string): unknown {
		try {
			const item = this.storage.getItem(key)

			if (!item) return undefined
			return JSON.parse(String(item))
		} catch (error) {
			console.error(error)
		}
	}
	removeItem(key: string): void {
		try {
			this.storage.removeItem(key)
		} catch (error) {
			console.error(error)
		}
	}
}

export class CookiesAdapter implements StorageInterface {
	Cookies = Cookies

	setItem(key: string, value: unknown): void {
		this.Cookies.set(key, value as string)
	}
	getItem(key: string) {
		this.Cookies.get(key)
	}
	removeItem(key: string): void {
		this.Cookies.remove(key)
	}
}
const cookies = new StorageManage(new CookiesAdapter())
