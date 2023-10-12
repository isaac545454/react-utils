import { AxiosInstance } from 'axios'
import { HttpService } from '../HttpService/http-service'
import { apiClient } from '../HttpClient/client-config'

/**
 * Cria uma instância de HttpService configurada para um tipo específico de resposta.
 * @template IResponse - O tipo da resposta esperada.
 * @returns {{ http: HttpService }} Um objeto contendo a instância de HttpService.
 */
export const createHttp = <IResponse>() => ({ http: new HttpService<IResponse, AxiosInstance>(apiClient) })
