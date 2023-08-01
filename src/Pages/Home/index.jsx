import useUsers from "../../hooks/useUsers";
import "./index.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, error, isLoading } = useUsers();

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <ul className="user-details-container">
      {data?.data.map((user) => {
        return (
          <Link
            className="user-links"
            to={`users/${user.id}/posts`}
            key={user.id}
          >
            <li>{user.name}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Home;
