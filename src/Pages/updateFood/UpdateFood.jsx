import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from './../../Hooks/AxiosSecure';
import toast, { Toaster } from "react-hot-toast";


const UpdateFood = () => {

    const foodData = useLoaderData();
    const {user} = useContext(AuthContext);
    const {date, donatorEmail, donatorName, donatorUrl, foodQuantity, foodUrl, location, name, notes, status } = foodData;
    const axiosSecure = useAxiosSecure();
    const {id} = useParams();
    console.log(id);

    const handleUpdateFood = (e) => {
        e.preventDefault();
    
        const form = e.target;
    
        const name = form.foodName.value.toLowerCase();
        const foodUrl = form.foodUrl.value;
        const foodQuantity = form.foodQuantity.value;
        const location = form.location.value;
        const date = form.date.value;
        const notes = form.notes.value;
        const status = form.status.value;
    
        const updatedFoodInfo = {
          name,
          foodUrl,
          foodQuantity,
          location,
          date,
          notes,
          status,
        };
        console.log(updatedFoodInfo);

        axiosSecure.put(`/foods/${id}`, updatedFoodInfo)
        .then(data => {
            if(data.data.acknowledged){
                toast.success("Successfully Updated Food")
            }
        })
    }


    return (
        <div>
      <form
        className="p-5 border w-full lg:w-2/3 mx-auto my-4 space-y-4 rounded-lg bg-white"
        onSubmit={handleUpdateFood}
      >
        <h1 className="text-5xl font-bold primary-btn text-center ">
          Update Food
        </h1>
        <div className="lg:flex gap-2">
          <div className="form-control w-full">
            <label className="text-xl font-semibold">Food Name</label>
            <input
              type="text"
              placeholder="Enter Food Name"
              className="input input-bordered"
              name="foodName"
              defaultValue={name}
            />
          </div>
          <div className="form-control w-full">
            <label className="text-xl font-semibold">Food Image</label>
            <input
              type="text"
              placeholder="Enter Food Image URL"
              className="input input-bordered"
              name="foodUrl"
              defaultValue={foodUrl}
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
              defaultValue={foodQuantity}
            />
          </div>
          <div className="form-control w-full">
            <label className="text-xl font-semibold">Location</label>
            <input
              type="text"
              placeholder="Enter Pickup Location"
              className="input input-bordered"
              name="location"
              defaultValue={location}
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
            defaultValue={date}
          />
        </div>

        <div className="form-control w-full">
          <label className="text-xl font-semibold">Additional Notes</label>
          <textarea
            name="notes"
            defaultValue={notes}
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
              readOnly
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
              readOnly
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
              readOnly
            />
          </div>
          <div className="form-control w-full">
            <label className="text-xl font-semibold">Food status</label>
            <select name="status" id="" className="input input-bordered" disabled>
              <option value={true} selected>Available</option>
              <option value={false}>Not Available</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <input type="submit" value="Update Food" className="btn btn-outline" />
        </div>
      </form>
      <Toaster></Toaster>
    </div>

    );
};

export default UpdateFood;