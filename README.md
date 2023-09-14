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