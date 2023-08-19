import axios from "axios";

interface IGet {
  url: string;
}

export const deleteApi = async <TResponse>({
  url,
}: IGet): Promise<TResponse> => {
  const { data } = await axios.delete<TResponse>(url);

  return data;
};
