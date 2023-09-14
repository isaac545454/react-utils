# react-utils

##cada componente tem um doc em storybook + jsDoc


```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```


```js
//uso do HttpClient
import { api as apiClient } from "../service/api";
import { createHttp, HttpClient } from "./http-client"; // Importe a classe e a função

// Crie uma instância de HttpClient configurada para um tipo específico de resposta
const { http } = createHttp<MyResponseType>();

// Faça uma solicitação GET para um endpoint
const response = await http.exec({ endpoint: "/exemplo" });

 
```
