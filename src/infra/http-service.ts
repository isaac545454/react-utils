import  { AxiosInstance } from "axios";
import { HttpServiceProps } from './types'
import { HttpProps } from "../domain/models/HttpProps";
 
/**
 * Uma classe para realizar solicitações HTTP usando Axios.
 * @template IResponse - O tipo da resposta esperada.
 * @params Client  - O tipo do cliente que será usado.
 */
export class HttpService <IResponse, TClient extends AxiosInstance> implements HttpServiceProps<IResponse> {
    private readonly client: TClient  

    constructor(client: TClient) {
        this.client = client
    }
    /**
     * Executa uma solicitação HTTP.
     * @param {HttpProps} params - Os parâmetros da solicitação HTTP.
     * @returns {Promise<IResponse>} Uma Promise que resolve na resposta da solicitação.
     */
    async exec({ endpoint = "", ...res }:HttpProps):Promise<IResponse> {
        
        const { data } = await this.client<IResponse>(endpoint, { ...res });
        return data;
    }
}
