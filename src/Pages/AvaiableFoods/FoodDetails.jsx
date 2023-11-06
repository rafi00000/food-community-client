import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const FoodDetails = () => {
    const {user} = useContext(AuthContext);
    const food = useLoaderData();
    const {email} = user;
    const {name, location, foodUrl, donatorName, foodQuantity, date, _id, notes, donatorEmail} = food;

    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      };

    return (
        <div>
            <img src={foodUrl} alt="" className="w-1/3 mx-auto pt-10"/>
            <h2 className="text-5xl font-bold primary-btn text-center">{name.toProperCase()}</h2>
            <div className="flex justify-between primary-bg p-3 rounded-md">
                <h3 className="text-xl font-bold">Donator: {donatorName}</h3>
                <h3 className="text-xl font-bold">{location}</h3>
            </div>
            <p className="text-xl">Quantity: {foodQuantity}</p>
            <p className="text-xl">Date: {date}</p>
            <p className="text-center"><button className="btn primary-bg" onClick={()=>document.getElementById('my_modal_4').showModal()}>Request</button></p>

            {/* modal */}
            <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">

            <form
        className="p-5 border w-full mx-auto my-4 space-y-4 rounded-lg bg-white"
      >
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
              defaultValue={email}
            />
          </div>
          <div className="form-control w-full">
            <label className="text-xl font-semibold">Food status</label>
            <select name="status" id="" className="input input-bordered">
              <option value={true}>Available</option>
              <option value={false}>Not Available</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <input type="submit" value="Add Food" className="btn btn-outline" />
        </div>
      </form>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
            </dialog>
        </div>
    );
};

export default FoodDetails;