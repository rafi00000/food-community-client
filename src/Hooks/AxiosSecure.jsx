import axios from "axios";

const instance = axios.create({
  baseURL: "b8a11-server-side-rafi00000.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
