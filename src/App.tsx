import { AxiosError } from "axios";
import { useGet } from "./hook/useGet";
import { usePost } from "./hook/usePost";
import { useTreatmentRequest } from "./hook/useTreatmentRequest";
import { toast } from "react-toastify";
import { endpoint } from "./endipoints";

export interface RootObject {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const mensagem = {
  error: "Ops... houve um erro",
  sucess: "Post Criado com sucesso",
};

function App() {
  const { data, isLoading, isError } = useGet<RootObject[]>({
    queryKey: ["getPosts"],
    url: endpoint.getPosts,
  });

  const treatmentComponen = useTreatmentRequest({
    data,
    isLoading,
    isError,
    mensagemError: { mensagem: mensagem.error },
  });

  const { mutate } = usePost<
    { id: string },
    AxiosError<unknown>,
    { name: string }
  >({
    url: endpoint.getPosts,
    options: {
      onSuccess: () => {
        toast.success(mensagem.sucess);
      },
    },
  });

  const handleClick = () => {
    mutate({ name: "aa" });
  };

  if (treatmentComponen !== undefined) {
    return treatmentComponen;
  }

  return (
    <>
      {treatmentComponen && treatmentComponen}
      {data?.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.title}</p>
          <p>{item.userId}</p>
          <button onClick={handleClick}>Acessar</button>
        </div>
      ))}
    </>
  );
}

export default App;
