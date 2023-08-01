import usePosts from "../../hooks/usePosts";
import { Link, useParams } from "react-router-dom";

const Posts = () => {
  const { userId } = useParams();
  const { data, error, isLoading } = usePosts(userId);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="posts-container">
      {data?.data.length > 0
        ? data?.data.map((post) => {
            return (
              <Link to={`/post/${post.id}`} key={post.id}>
                <li>{post.title}</li>
              </Link>
            );
          })
        : "No Posts Available"}
    </div>
  );
};

export default Posts;
