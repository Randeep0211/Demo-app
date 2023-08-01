import useFetch from "./useFetch";

const usePostsDetails = (postId) => {
  return useFetch(`/posts/${postId}`);
};

export default usePostsDetails;
