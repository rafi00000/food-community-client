import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../../Hooks/AxiosSecure";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const secureAxios = useAxiosSecure();

  const handleAddFood = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.foodName.value.toLowerCase();
    const foodUrl = form.foodUrl.value;
    const foodQuantity = form.foodQuantity.value;
    const location = form.location.value;
    const date = form.date.value;
    const notes = form.notes.value;
    const donatorName = form.donatorName.value;
    const donatorEmail = form.donatorEmail.value;
    const donatorUrl = form.donatorUrl.value;
    const status = form.status.value;

    const foodInfo = {
      name,
      foodUrl,
      foodQuantity,
      location,
      date,
      notes,
      donatorName,
      donatorEmail,
      donatorUrl,
      status,
    };


    // posting the data using axios--------
    secureAxios.post("/foods", foodInfo)
      .then((data) => console.log(data));
  };
  return (
    <div>
      <form
        className="p-5 border w-full lg:w-2/3 mx-auto my-4 space-y-4 rounded-lg bg-white"
        onSubmit={handleAddFood}
      >
        <h1 className="text-5xl font-bold primary-btn text-center ">
          Add Food
        </h1>
        <div className="lg:flex gap-2">
          <div className="form-control w-full">
            <label className="text-xl font-semibold">Food Name</label>
            <input
              type="text"
              placeholder="Enter Food Name"
              className="input input-bordered"
              name="foodName"
            />
          </div>
          <div className="form-control w-full">
            <label className="text-xl font-semibold">Food Image</label>
            <input
              type="text"
              placeholder="Enter Food Image URL"
              className="input input-bordered"
              name="foodUrl"
            />
          </div>
        </div>
        <div className="lg:flex gap-2">
          <div className="form-control w-full">
            <label className="text-xl font-semibold">Quantity</label>
            <input
              type="number"
              placeholder="Enter Quantity"
              className="input input-bordered"
              name="foodQuantity"
            />
          </div>
          <div className="form-control w-full">
            <label className="text-xl font-semibold">Location</label>
            <input
              type="text"
              placeholder="Enter Pickup Location"
              className="input input-bordered"
              name="location"
            />
          </div>
        </div>

        <div className="form-control w-full">
          <label className="text-xl font-semibold">Date</label>
          <input
            type="date"
            placeholder="Enter Date"
            className="input input-bordered"
            name="date"
          />
        </div>

        <div className="form-control w-full">
          <label className="text-xl font-semibold">Additional Notes</label>
          <textarea
            name="notes"
            id=""
            cols="30"
            rows="10"
            placeholder="Enter Additional Notes (If needed)"
            className="input input-bordered p-4"
          ></textarea>
        </div>

        <h3 className="primary-btn font-bold text-center text-5xl">
          Donator Info
        </h3>
        <div className="lg:flex gap-2">
          <div className="form-control w-full">
            <label className="text-xl font-semibold">Donator Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="input input-bordered"
              name="donatorName"
              defaultValue={user.displayName}
            />
          </div>
          <div className="form-control w-full">
            <label className="text-xl font-semibold">Donator Image</label>
            <input
              type="text"
              placeholder="Enter Image URL"
              className="input input-bordered"
              name="donatorUrl"
              defaultValue={user.photoURL}
            />
          </div>
        </div>

        <div className="lg:flex gap-2">
          <div className="form-control w-full">
            <label className="text-xl font-semibold">Donator Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="input input-bordered"
              name="donatorEmail"
              defaultValue={user.email}
            />
          </div>
          <div className="form-control w-full">
            <label className="text-xl font-semibold">Food status</label>
            <select name="status" id="" className="input input-bordered">
              <option value={true} selected>Available</option>
              <option value={false}>Not Available</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <input type="submit" value="Add Food" className="btn btn-outline" />
        </div>
      </form>
    </div>
  );
};

export default AddFood;
