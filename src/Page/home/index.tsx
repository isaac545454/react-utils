import { AxiosError } from "axios";
import { useGet } from "../../hook/useGet";
import { usePost } from "../../hook/usePost";
import { useTreatmentRequest } from "../../hook/useTreatmentRequest";
import { endpoint } from "../../endipoints";
import { IResponsePost } from "./types";
import { mensagem } from "./mensagem";

function Home() {
  const { data, isLoading, isError } = useGet<IResponsePost[]>({
    queryKey: ["getPosts"],
    url: endpoint.getPosts,
  });

  const treatmentComponen = useTreatmentRequest({
    data,
    isLoading,
    isError,
    mensagemError: { mensagem: mensagem.error },
    mensagemNotData: { mensagem: mensagem.notData },
  });

  const { mutate } = usePost<
    { id: string },
    AxiosError<unknown>,
    { name: string }
  >({
    url: endpoint.getPosts,
  });

  const handleClick = () => {
    mutate({ name: mensagem.sucess });
  };

  return (
    <div>
      <h1>Header</h1>
      {treatmentComponen && treatmentComponen}
      {data?.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.body}</p>
          <button onClick={handleClick}>Acessar</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
