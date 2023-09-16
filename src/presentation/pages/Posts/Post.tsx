import { ListPosts } from "./ListPosts";
import { usePost } from "./hook";
import { withErrorAndLoadingHandling } from "../../components/HOC";

export const Post = () => {
  const { data, isError, isLoading } = usePost();
  const WithListPostsErrorHandling = withErrorAndLoadingHandling(ListPosts);

  return (
    <>
      <WithListPostsErrorHandling
        isLoading={isLoading}
        data={data}
        isError={isError}
      />
    </>
  );
};
