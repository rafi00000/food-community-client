import axios from "axios";

const instance = axios.create({
  baseURL: "https://food-server-rouge.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
