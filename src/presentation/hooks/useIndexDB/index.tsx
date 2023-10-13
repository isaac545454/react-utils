import { useRef } from 'react'
import { AddProps, DBProps, DeleteProps } from './types'
import { ConnectionFailed, IndexedDBError } from './error'

export const useIndexedDB = (name: string, version: number) => {
	const DB = useRef<IDBDatabase | null>(null)
	const request = indexedDB.open(name, version)

	request.onsuccess = event => (DB.current = (event.target as IDBOpenDBRequest).result)
	request.onerror = () => {
		throw new ConnectionFailed()
	}

	const addItem = async ({ data, column, transition }: AddProps) => {
		if (!DB.current) throw new ConnectionFailed()
		const transaction = DB.current.transaction([column], transition)
		const objectStore = transaction.objectStore(column)
		const request = objectStore.add(data)
		await new Promise<string>(resolve => {
			request.onsuccess = () => resolve('success')
			request.onerror = () => {
				throw new IndexedDBError()
			}
		})
	}

	const removeItem = async ({ id, column, transition }: DeleteProps) => {
		if (!DB.current) throw new ConnectionFailed()
		const transaction = DB.current.transaction([column], transition)
		const objectStore = transaction.objectStore(column)
		const request = objectStore.delete(id)
		await new Promise<string>(resolve => {
			request.onsuccess = () => resolve('success')
			request.onerror = () => {
				throw new IndexedDBError()
			}
		})
	}

	const getAllItems = async ({ column, transition }: DBProps) => {
		if (!DB.current) throw new ConnectionFailed()
		const transaction = DB.current.transaction([column], transition)
		const objectStore = transaction.objectStore(column)
		const request = objectStore.getAll()
		return new Promise<Array<object>>(resolve => {
			request.onsuccess = event => resolve((event.target as IDBRequest).result)
			request.onerror = () => {
				throw new IndexedDBError()
			}
		})
	}

	return {
		addItem,
		removeItem,
		getAllItems,
	}
}
