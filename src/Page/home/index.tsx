import { AxiosError } from "axios";
import { useGet } from "../../hook/useGet";
import { usePost } from "../../hook/usePost";
import { useTreatmentRequest } from "../../hook/useTreatmentRequest";
import { endpoint } from "../../endipoints";

export interface IResponsePost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const mensagem = {
  error: "Ops... houve um erro",
  sucess: "Post Criado com sucesso",
  notData: "Não a dados",
};

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
