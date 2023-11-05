import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = (e) =>{
        e.preventDefault();
        const form  = e.target;
        const name = form.name.value;
        const url = form.url.value; 
        const email = form.email.value;
        const password = form.password.value;

        const registerUser = {name, url, email, password} ;

        console.log(registerUser);
    }

    return (
        <div className=" my-4 flex justify-center">
      <form
        className="p-5 border w-3/4 lg:w-1/2 mx-auto my-4 space-y-4 rounded-lg"
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
          <Link to={"/login"} className="primary-btn font-bold mx-2">Login</Link>
        </p>
      </form>
    </div>
    );
};

export default Register;