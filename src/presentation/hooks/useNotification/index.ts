import { NotificationFunctions } from './types'

export const Notification = (notification: NotificationFunctions) => {
	const error = (msg: string) => notification.error(msg)
	const warn = (msg: string) => notification.warn(msg)
	const success = (msg: string) => notification.success(msg)

	return {
		error,
		warn,
		success,
	}
}
