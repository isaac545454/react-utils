import { api as apiClient  } from "../service/api";
import { AxiosRequestConfig } from "axios";

type HttpAxiosClientProps<IResponse> = { exec: (params: HttpProps) => Promise<IResponse> }

type HttpProps = AxiosRequestConfig & { endpoint?: string }

class HttpAxiosClient<IResponse> implements HttpAxiosClientProps<IResponse> {
    private readonly api = apiClient
    async exec({ endpoint = "", ...res }: HttpProps): Promise<IResponse> {
        const { data } = await this.api<IResponse>(endpoint, { ...res })
        return data
    }
}

export const createAxios = <IResponse>() => ({ http: new HttpAxiosClient<IResponse>() })

 