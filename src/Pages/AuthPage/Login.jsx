import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {

  const {signInWithEmail, googleSignIn, githubLogin} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInWithEmail(email, password)
    .then(data => {
      console.log(data);
    })
    .catch(err => toast.error('Invalid Auth Credentials'))
    
  };

  return (
    <div>
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
      
      <Toaster></Toaster>
    </div>
    <p className="text-center space-y-2 flex flex-col gap-1 items-center">
          <button className=" btn btn-outline w-2/3 md:w-2/5" onClick={googleSignIn}><FcGoogle className="text-3xl"/>Login with Google</button>
          <button className=" btn btn-outline w-2/3 md:w-2/5" onClick={githubLogin}><FaGithub className="text-3xl"/>Login with Google</button>
        </p>
    </div>
  );
};

export default Login;
