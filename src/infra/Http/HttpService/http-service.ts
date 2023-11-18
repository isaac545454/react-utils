import { AxiosInstance } from 'axios'
import { HttpServiceProps } from './types'
import { HttpProps } from '../../../domain/models/HttpProps'

/**
 * Uma classe para realizar solicitações HTTP usando Axios.
 * @template IResponse - O tipo da resposta esperada.
 * @params Client  - O tipo do cliente que será usado.
 */
export class HttpService<IResponse, TClient extends AxiosInstance> implements HttpServiceProps<IResponse> {
	constructor(private readonly client: TClient) {}
	/**
	 * Executa uma solicitação HTTP.
	 * @param {HttpProps} params - Os parâmetros da solicitação HTTP.
	 * @returns {Promise<IResponse>} Uma Promise que resolve na resposta da solicitação.
	 */
	async exec({ endpoint = '', ...res }: HttpProps): Promise<IResponse> {
		const { data } = await this.client<IResponse>(endpoint, { ...res })
		return data
	}
}

export abstract class Controller {
	static UnauthorizedError = class UnauthorizedError extends Error {
		constructor() {
			super('Unauthorized')
			this.name = 'UnauthorizedError'
		}
	}

	static ForbiddenError = class ForbiddenError extends Error {
		constructor(error: any) {
			super('Forbidden')
			this.name = 'ForbiddenError'
			this.stack = error?.stack
		}
	}

	static ServerError = class ServerError extends Error {
		constructor(error: any) {
			super('Internal Server Error')
			this.name = 'ServerError'
			this.stack = error?.stack
		}
	}

	static MissingParamError = class MissingParamError extends Error {
		constructor(paramName: string) {
			super(`Missing param: ${paramName}`)
			this.name = 'MissingParamError'
		}
	}

	static InvalidParamError = class InvalidParamError extends Error {
		constructor(paramName: string) {
			super(`Invalid param: ${paramName}`)
			this.name = 'InvalidParamError'
		}
	}

	static EmailInUseError = class EmailInUseError extends Error {
		constructor() {
			super(`The received email is already in use`)
			this.name = 'EmailInUseError'
		}
	}

	static AccessDeniedError = class AccessDeniedError extends Error {
		constructor() {
			super('Access denied')
			this.name = 'AccessDeniedError'
		}
	}

	static AuthenticationError = class AuthenticationError extends Error {
		constructor() {
			super('Authentication failed')
			this.name = 'AuthenticationError'
		}
	}
}

interface Login {
	login: () => void
}

class MyCustomError extends Controller implements Login {
	constructor() {
		super()
	}
	login() {
		try {
		} catch (error) {
			throw new Controller.AccessDeniedError()
		}
	}
}
