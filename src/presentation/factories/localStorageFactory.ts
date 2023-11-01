import { Storage } from '../../infra/Storage'

export const localStorageFactory = () => Storage(localStorage)
