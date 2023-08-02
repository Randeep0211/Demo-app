import { createBrowserRouter } from "react-router-dom";
import { Home, Posts, PostDetails } from "../Pages";
import { getPostDetailsData } from "../Pages/PostDetails";
import NotFound from "../Pages/NotFound";

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
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
