import Cookies from 'js-cookie'
import { Storage } from '../../infra/Storage'

const CookiesStorage = {
	setItem: Cookies.set,
	getItem: Cookies.get,
	removeItem: Cookies.remove,
}

export const cookiesStorageFactory = () => Storage(CookiesStorage)
