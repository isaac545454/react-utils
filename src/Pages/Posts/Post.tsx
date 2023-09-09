import { DataLoader, Posts } from "./ListPosts";
import { usePost } from "./hook";

export const Post = () => {
  const { data, isError, isLoading } = usePost();

  return (
    <>
      <DataLoader isError={isError} isloading={isLoading}>
        <Posts data={data ?? []} />
      </DataLoader>
    </>
  );
};
