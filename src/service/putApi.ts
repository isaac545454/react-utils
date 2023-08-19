import axios from "axios";

interface Iput<body> {
  url: string;
  bodyData: body;
}

export const putApi = async <TResponse, body>({
  url,
  bodyData,
}: Iput<body>): Promise<TResponse> => {
  const { data } = await axios.put<TResponse>(url, bodyData);

  return data;
};
