import { HttpProps } from "../domain/models/HttpProps";

 

export type HttpServiceProps<IResponse> = { 
    exec: (params: HttpProps) => Promise<IResponse> 
}

