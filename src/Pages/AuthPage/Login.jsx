import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {

  const {signInWithEmail, user} = useContext(AuthContext);
  

  const handleLogin = (e) => {
    e.preventDefault();
    if(user){
      return toast.error('you are already logged In')
    }
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    signInWithEmail(email, password)
    
  };

  return (
    <div className=" my-4 flex justify-center">
      <form
        className="p-5 border w-3/4 lg:w-1/2 mx-auto my-4 space-y-4 rounded-lg"
        onSubmit={handleLogin}
      >
        <h1 className="text-5xl font-bold primary-btn text-center">
          Login Here
        </h1>
        <div className="form-control w-full">
          <label className="text-xl font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="input input-bordered"
            name="email"
          />
        </div>
        <div className="form-control w-full">
          <label className="text-xl font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="input input-bordered"
            name="password"
          />
        </div>
        <div className="flex justify-center">
          <input type="submit" value="Login" className="btn btn-outline " />
        </div>

        <p className="text-center">
            New User?
          <Link to={"/register"} className="primary-btn font-bold">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
