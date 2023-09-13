 import { api as apiClient  } from "../service/api";
import  { AxiosInstance, AxiosRequestConfig } from "axios";

type HttpAxiosClientProps<IResponse> = { exec: (params: HttpProps) => Promise<IResponse> }

type HttpProps = AxiosRequestConfig & { endpoint?: string }

 
 
class HttpClient<IResponse, TClient extends AxiosInstance> implements HttpAxiosClientProps<IResponse> {
    private readonly client: TClient    
   
    constructor(client:  TClient){
        this.client = client 
    }

    async exec({ endpoint = "", ...res }: HttpProps): Promise<IResponse> {
        const { data } = await this.client<IResponse>(endpoint, { ...res })
        return data
    }
}

export const createHttp = <IResponse>() => ({ http: new HttpClient<IResponse, AxiosInstance>(apiClient) })

