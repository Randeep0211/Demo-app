import { useRouteError, Link } from "react-router-dom";
import { AxiosError } from "axios";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h1>{(error as AxiosError)?.message || "Page Not Found"}</h1>
      <Link to="/">Back to Home</Link>
    </>
  );
};

export default NotFound;
