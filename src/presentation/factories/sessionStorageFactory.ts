import { Storage } from '../../infra/Storage'
import Cookies from 'js-cookie'
import { StorageInterface } from '../../infra/Storage/types'
export const sessionStorageFactory = () => Storage(sessionStorage)

const CookiesStorage = {
	setItem: Cookies.set,
	getItem: Cookies.get,
	removeItem: Cookies.remove,
}

enum StorageType {
	'sessionStorage',
	'localStorage',
	'CookiesStorage',
}

const storageImplementations = {
	[StorageType.sessionStorage]: sessionStorage,
	[StorageType.localStorage]: localStorage,
	[StorageType.CookiesStorage]: CookiesStorage,
}

type StorageOptions = {
	storageStrategy?: (params: StorageInterface) => StorageInterface
	type: StorageType
}

export const useStorageStrategy = ({ type, storageStrategy = Storage }: StorageOptions) => {
	return storageStrategy(storageImplementations[type])
}
