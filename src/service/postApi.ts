import axios from "axios";

interface Ipost<body> {
  url: string;
  bodyData: body;
}

export const postApi = async <TResponse, body>({
  url,
  bodyData,
}: Ipost<body>): Promise<TResponse> => {
  const { data } = await axios.post<TResponse>(url, bodyData);

  return data;
};
