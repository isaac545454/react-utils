
> ## 📁 arquitetura do projeto
```shell

src/
|-- domain/
|   |-- user/
|   |-- task/
|-- infra/
|   |-- api/
|-- data/
|   |--
|-- presentation/
|   |-- pages/
|   |-- templates/
|   |-- components/
|   |   |-- atoms/
|   |   |-- molecules/
|   |   |-- organisms/
 
```
>## 📚 Documentação

| Categoria           | Ferramenta de Documentação |
|---------------------|-----------------------------|
| Componentes         | Storybook                   |
| Hooks e Classes     | jsDocs                      |
| Utilitários         | Markdown                    |




> ## 📄 Sumário

 
- [`createHttp()`](https://www.linkedin.com/feed/update/urn:li:activity:7107698003984941059/)
- [`useHttpQuery()`](https://www.linkedin.com/posts/isaac545454_useget-activity-7099364195527196672-21oh?utm_source=share&utm_medium=member_desktop)
- [`useHttpMutation()`](https://www.linkedin.com/posts/isaac545454_useget-activity-7099364195527196672-21oh?utm_source=share&utm_medium=member_desktop)
 - [`Composition`](https://www.linkedin.com/posts/isaac545454_pare-de-criar-componentes-que-dependem-de-activity-7104436766790549504-zzLp?utm_source=share&utm_medium=member_desktop)
  - [`patterns Adapter`](https://www.linkedin.com/feed/update/urn:li:activity:7114582559736410112/)
  - [`uncontrolled vs controlled`](https://www.linkedin.com/posts/isaac545454_uncontrolled-components-vs-controlled-components-activity-7115671105025028096-ke60?utm_source=share&utm_medium=member_desktop)



>## 🌐 createHttp() 

```js
//uso do createHttp
import { apiClient } from "@/infra/api";
import { createHttp } from "@/infra/http-client"; // Importe a classe e a função

// Crie uma instância de HttpService configurada para um tipo específico de resposta
const { http } = createHttp<MyResponseType>();

// Faça uma solicitação GET para um endpoint
const response = await http.exec({
  endpoint: "/exemplo",
  method: "GET",
  params: { id: "1" },
});
```
>## 📡 useHttpQuery ()
```js
//uso do useHttpQuery 
import { useHttpQuery  } from '@/hooks/index';
import { endpoint } from '@/endpoint';

//parametros
-`queryKey` (QueryKey): Uma chave única que identifica a consulta ou recurso a ser buscado. Isso pode ser útil para cache ou invalidação de cache.
-`options` (UseQueryOptions): Opções adicionais para personalizar o comportamento do `useQuery` da biblioteca `react-query`.
-`HttpService` (HttpProps): Um objeto de configuração que define os detalhes da requisição HTTP GET.
-`endpoint` (string): O endpoint da API ou URL de onde os dados devem ser buscados.
-`headers` (object): Um objeto contendo cabeçalhos HTTP opcionais a serem enviados com a requisição.
-Outras opções relevantes para uma requisição HTTP GET, como `params`, `auth`, etc.

//exemplo de uso(obs: evitar usar string diretamente no endpoint)
const { data, isLoading, isError } = useHttpQuery <IResponsePost[]>({
    queryKey: ['getPosts'],
    HttpService: { endpoint: endpoint.getPosts },
    options: {enabled: true}
});
```

>## 🔄 useHttpMutation()
```js
//uso do useHttpMutation
import { useHttpMutation } from '@/hooks/index';
import { endpoint } from '@/endpoint';

//parametros
- `options` (MutationOptions<TData, TError, TRequest>): Um objeto opcional contendo opções de configuração para a mutação. Essas opções são as mesmas que as fornecidas pelo `useMutation` do `react-query`. Elas permitem personalizar o comportamento da mutação, como manipulação de erros, atualização de cache, etc.
- `HttpService` (HttpProps): Um objeto que representa os dados da solicitação POST. Isso geralmente inclui o corpo da solicitação, cabeçalhos e outras informações relevantes para a solicitação.


//exemplo de uso(obs: evitar usar string diretamente no endpoint)
 const { isLoading, isError, isSuccess, mutate } = useHttpMutation<TData, TError, TRequest>({
    options: {
       // Opções de configuração da mutação (opcional),
    },
    HttpService: {
       endpoint: endpoint.createPost 
    },
  });

  const handleSubmit = () => {
    mutate();
  };
```


>## 🧩 Composition 
```js
import { Input } from './Input';

function App() {
  return (
    <div>
      <Input.Text />
      <Input.Title>Título</Input.Title>
      <Input.Mask mask="99/99/9999" />
      <Input.Error>Error</Input.Error>
    </div>
  );
}
```

>## 🔌patterns Adapter
```js
const CookiesStorage = {
	setItem: Cookies.set,
	getItem: Cookies.get,
	removeItem: Cookies.remove,
}
export const cookiesStorageFactory = () => useStorage(CookiesStorage)
```

>## 🎮 uncontrolled vs controlled 

```js 	const uncontrolled = useRef<HTMLInputElement>(null)
                <Input
                    name="uncontrolled"
                    ref={uncontrolled}
                />```