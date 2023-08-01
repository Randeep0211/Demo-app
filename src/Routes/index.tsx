import { createBrowserRouter } from "react-router-dom";
import { Home, Posts, PostDetails } from "../Pages";
import { getPostDetailsData } from "../Pages/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users/:userId/posts",
    element: <Posts />,
  },
  {
    path: "/post/:postId",
    element: <PostDetails />,
    loader: getPostDetailsData,
  },
]);

export default router;
