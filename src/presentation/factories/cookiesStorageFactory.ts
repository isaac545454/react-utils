import Cookies from 'js-cookie'
import { useStorage } from '../hooks'

const CookiesStorage = {
	setItem: Cookies.set,
	getItem: Cookies.get,
	removeItem: Cookies.remove,
}

export const cookiesStorageFactory = () => useStorage(CookiesStorage)
export const localStorageFactory = () => useStorage(localStorage)
export const sessionStorageFactory = () => useStorage(sessionStorage)
