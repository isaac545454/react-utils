 import { api as apiClient  } from "../service/api";
import  { AxiosInstance, AxiosRequestConfig } from "axios";

type HttpAxiosClientProps<IResponse> = { exec: (params: HttpProps) => Promise<IResponse> }

type HttpProps = AxiosRequestConfig & { endpoint?: string }

 
/**
 * Uma classe para realizar solicitações HTTP usando Axios.
 * @template IResponse - O tipo da resposta esperada.
 * @params Client  - O tipo do cliente que será usado.
 */
class HttpClient <IResponse, TClient extends AxiosInstance> implements HttpAxiosClientProps<IResponse> {
    private readonly client: TClient  

    constructor(client: TClient) {
        this.client = client
    }
    /**
     * Executa uma solicitação HTTP.
     * @param {HttpProps} params - Os parâmetros da solicitação HTTP.
     * @returns {Promise<IResponse>} Uma Promise que resolve na resposta da solicitação.
     */
    async exec({ endpoint = "", ...res }) {
        const { data } = await this.client<IResponse>(endpoint, { ...res });
        return data;
    }
}
/**
 * Cria uma instância de HttpClient configurada para um tipo específico de resposta.
 * @template IResponse - O tipo da resposta esperada.
 * @returns {{ http: HttpClient }} Um objeto contendo a instância de HttpClient.
 */
export const createHttp = <IResponse>() => ({ http: new HttpClient<IResponse, AxiosInstance>(apiClient) })
