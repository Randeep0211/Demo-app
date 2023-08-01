import { createBrowserRouter } from "react-router-dom";
import { Home, Posts, PostDetails } from "../Pages";

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
  },
]);

export default router;
