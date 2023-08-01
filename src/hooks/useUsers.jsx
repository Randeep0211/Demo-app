import useFetch from "./useFetch";

const useUsers = () => {
  return useFetch("/users");
};

export default useUsers;
