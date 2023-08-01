import { useParams } from "react-router-dom";
import usePostsDetails from "../../hooks/usePostDetails";

const PostDetails = () => {
  const { postId } = useParams();
  const { data: postDetails, error, isLoading } = usePostsDetails(postId);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>{postDetails?.data?.title}</h2>
      <p>{postDetails?.data?.body}</p>
    </div>
  );
};

export default PostDetails;
