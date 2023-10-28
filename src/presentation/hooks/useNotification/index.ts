import { NotificationFunctions } from './types'
import { toast } from 'react-toastify'

export const useNotification = () => notification(toast)

export const notification = (notification: NotificationFunctions) => {
	const error = (msg: string) => notification.error(msg)
	const warn = (msg: string) => notification.warn(msg)
	const success = (msg: string) => notification.success(msg)

	return {
		error,
		warn,
		success,
	}
}
