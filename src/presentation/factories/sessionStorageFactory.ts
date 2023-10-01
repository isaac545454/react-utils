import { useStorage } from "../hooks";

export const sessionStorageFactory  =()=> useStorage(sessionStorage)