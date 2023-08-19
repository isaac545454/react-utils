import axios from "axios";

interface IGet {
  url: string;
}

export const getApi = async <TResponse>({ url }: IGet): Promise<TResponse> => {
  const { data } = await axios.get<TResponse>(url);

  return data;
};
