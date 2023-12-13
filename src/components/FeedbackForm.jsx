import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/AxiosSecure";

const FeedbackForm = () => {
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const feedback = { name, email, message };
    console.log(feedback);
    axiosSecure.post("/feedback", feedback).then((res) => {
      if (res.data) {
        toast.success("Successfully give the feedback");
      }
    });
  };

  return (
    <div>
      <form
        className="border p-5 rounded-lg text-black space-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold underline">Feedback</h1>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label>email</label>
          <input
            type="email"
            name="email"
            required
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label>Message</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            className="input input-bordered"
          ></textarea>
        </div>
        <p className="text-center">
          <button className="btn btn-sm">Submit</button>
        </p>
      </form>
    </div>
  );
};

export default FeedbackForm;
