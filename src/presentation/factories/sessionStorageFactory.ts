import { Storage } from '../../infra/Storage'

export const sessionStorageFactory = () => Storage(sessionStorage)
