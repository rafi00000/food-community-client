import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const Register = () => {
  const { createwithMail, googleSignIn, user } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    const registerUser = { name, url, email, password };

    console.log(registerUser);

    createwithMail(email, password)
      .then((data) => {
        updateProfile(data.user, {
          displayName: name,
          photoURL: url,
        }).then((data) => {
          alert("Successfully create and updated");
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" my-4 ">
      <form
        className="p-5 border w-3/4 lg:w-1/2 mx-auto my-4 space-y-4 rounded-lg "
        onSubmit={handleRegister}
      >
        <h1 className="text-5xl font-bold primary-btn text-center">
          Register here
        </h1>
        <div className="form-control w-full">
          <label className="text-xl font-semibold">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered"
            name="name"
          />
        </div>
        <div className="form-control w-full">
          <label className="text-xl font-semibold">Photo URL</label>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="input input-bordered"
            name="url"
          />
        </div>
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
          <input type="submit" value="Register" className="btn btn-outline " />
        </div>

        <p className="text-center">
          Already Have an account?
          <Link to={"/login"} className="primary-btn font-bold mx-2">
            Login
          </Link>
        </p>
      </form>
        <p className="text-center space-y-2 flex flex-col gap-1 items-center">
          <button className=" btn btn-outline w-2/3 md:w-2/5" onClick={googleSignIn}><FcGoogle className="text-3xl"/>Login with Google</button>
          <button className=" btn btn-outline w-2/3 md:w-2/5"><FaGithub className="text-3xl"/>Login with Github</button>
        </p>
    </div>
  );
};

export default Register;
