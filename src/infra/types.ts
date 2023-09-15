import { HttpProps } from "@models/HttpProps";

 

export type HttpServiceProps<IResponse> = { 
    exec: (params: HttpProps) => Promise<IResponse> 
}

