export class ConnectionFailed extends Error {
	constructor() {
		super('database not connected ')
		this.name = 'ConnectionFailed'
	}
}

export class IndexedDBError extends Error {
	constructor() {
		super('indexDB promise fail')
		this.name = 'IndexedDBError'
	}
}
