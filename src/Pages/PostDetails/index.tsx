import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { api } from "../../api/apiClient";

type Posts = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

const PostDetails = () => {
  const data = useLoaderData() as Posts;
  const postDetails = data?.data?.data;
  console.log(data?.data);

  return (
    <div>
      <h2>{postDetails?.title}</h2>
      <p>{postDetails?.body}</p>
    </div>
  );
};

export const getPostDetailsData = ({ params }: LoaderFunctionArgs) => {
  return api.get(`/posts/${params.postId}`);
};
export default PostDetails;
