import { DataLoader, Posts } from "./ListPosts";
import { usePost } from "./hook";

export const ListPosts = () => {
  const { data, isError, isLoading } = usePost();

  return (
    <DataLoader isloading={isLoading} isErrror={isError}>
      <Posts data={data ?? []} />
    </DataLoader>
  );
};
