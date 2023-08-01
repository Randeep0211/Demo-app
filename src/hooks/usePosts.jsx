import useFetch from "./useFetch";

const usePosts = (userId) => {
  return useFetch(`/users/${userId}/posts`);
};

export default usePosts;
