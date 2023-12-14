import axios from "axios";

const instance = axios.create({
  baseURL: "https://food-community-server.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
