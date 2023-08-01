import useFetch from "./useFetch";

type Users = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

const useUsers = () => {
  return useFetch<Users>("/users");
};

export default useUsers;
