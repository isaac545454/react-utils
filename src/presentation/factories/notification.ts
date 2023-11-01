import { toast } from 'react-toastify'
import { Notification } from '../hooks/useNotification'

export const useNotification = () => Notification(toast)
