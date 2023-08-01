import useFetch from "./useFetch";

type Posts = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

const usePosts = (userId: string | undefined) => {
  return useFetch<Posts>(`/users/${userId}/posts`);
};

export default usePosts;
