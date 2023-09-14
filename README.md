> ## 📁 arquitetura do projeto
```shell

src
 ├─> components
     └─> name-component
          ├─> types(interfaces/types)
          ├─> storybook(stories-do-compoente)
          ├─> test/name.spec.tsx(epec-do-component)
          ├─> name-component.ts(component)
          └─> index.ts(export-do-component)
 ├─> pages
     └─> name-page
         ├─> types(interfaces/types)
         ├─> hooks(logica-da-page)
         ├─> components(componentes-locais)
         ├─> name-page.ts(page)
         └─> index.ts(export-da-page)
└─> main.ts
 
```

>## 🌐 createHttp() 

```js
//uso do createHttp
import { api as apiClient } from "../service/api";
import { createHttp } from "./http-client"; // Importe a classe e a função

// Crie uma instância de HttpClient configurada para um tipo específico de resposta
const { http } = createHttp<MyResponseType>();

// Faça uma solicitação GET para um endpoint
const response = await http.exec({
  endpoint: "/exemplo",
  method: "GET",
  params: { id: "1" },
});
```
>## 📡useGet()
```js
//uso do useGet
import { useGet } from '@/hooks/index';
import { endpoint } from '@/endpoint';

//parametros
-`queryKey` (QueryKey): Uma chave única que identifica a consulta ou recurso a ser buscado. Isso pode ser útil para cache ou invalidação de cache.
-`options` (UseQueryOptions): Opções adicionais para personalizar o comportamento do `useQuery` da biblioteca `react-query`.
-`request` (IGet): Um objeto de configuração que define os detalhes da requisição HTTP GET.
-`endpoint` (string): O endpoint da API ou URL de onde os dados devem ser buscados.
-`headers` (object): Um objeto contendo cabeçalhos HTTP opcionais a serem enviados com a requisição.
-Outras opções relevantes para uma requisição HTTP GET, como `params`, `auth`, etc.

//exemplo de uso(obs: evitar usar string diretamente)
const { data, isLoading, isError } = useGet<IResponsePost[]>({
    queryKey: ['getPosts'],
    request: { endpoint: endpoint.getPosts, signal },
    options: {enabled: true}
});
```