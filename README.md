> ## 📁 arquitetura do projeto
```shell

src
 ├─> components
     └─> name
          ├─> types
          ├─> storybook
          ├─> test/name.spec.tsx
          ├─> name.ts
          └─> index.ts
 ├─> main.ts
 
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