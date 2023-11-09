import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from './../../Hooks/AxiosSecure';
import toast, { Toaster } from "react-hot-toast";

const FoodDetails = () => {
  const axios = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const food = useLoaderData();
  console.log(food);
  const { email } = user;
  const {
    name,
    location,
    foodUrl,
    donatorName,
    foodQuantity,
    date,
    _id,
    donatorEmail,
    donatorUrl,
    status
  } = food;
  console.log(food);

  const sdate = new Date();
const currentDate = sdate.toLocaleString('en-US', { timeZone: 'Asia/Dhaka', dateStyle: 'medium', timeStyle: 'medium' });
console.log(currentDate);


  const handleReqForm = (e) =>{
    e.preventDefault();
    
    const form = e.target;
    const name = form.foodName.value.toLowerCase();
    const foodUrl = form.foodUrl.value;
    const location = form.location.value;
    const notes = form.notes.value;
    const donatorName = form.donatorName.value;
    const donatorEmail = form.donatorEmail.value;
    const reqDate = form.reqDate.value;
    const requesterImg = user.photoURL;
    const requesterName = user.displayName;
    const donation = form.donation.value;

    const reqCart = {name, foodUrl, location, date, notes, donatorName, donatorEmail, donatorUrl, reqDate, foodId:_id, email, requesterImg, requesterName, status, donation};
    console.log(reqCart);

    if(donatorEmail === email){
      return alert('you can not request your food');
    }
    else if(foodQuantity < 1){
      //
      return alert('this food is finished');
    }

    // making post req to db
    axios.post('/foodReq', reqCart)
    .then(data => {
      toast.success('success in req')
      console.log(data.data);
    })
    .catch(err => console.log(err))
    
  } ;


  
  return (
    <div>
      <img src={foodUrl} alt="" className="w-1/3 mx-auto pt-10" />
      <h2 className="text-5xl font-bold primary-btn text-center">
        {name}
      </h2>
      <div className="flex justify-between primary-bg p-3 rounded-md">
        <h3 className="text-xl font-bold">Donator: {donatorName}</h3>
        <h3 className="text-xl font-bold">{location}</h3>
      </div>
      <p className="text-xl">Quantity: {foodQuantity}</p>
      <p className="text-xl">Expire Date: {date}</p>
      <p className="text-center">
        <button
          className="btn primary-bg"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          Request
        </button>
      </p>

      {/* modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form className="p-5 border w-full mx-auto my-4 space-y-4 rounded-lg bg-white" onSubmit={handleReqForm}>
            <div className="lg:flex gap-2">
              <div className="form-control w-full">
                <label className="text-xl font-semibold">Food Name</label>
                <input
                  type="text"
                  placeholder="Enter Food Name"
                  readOnly
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
                  readOnly
                  className="input input-bordered"
                  name="foodUrl"
                  defaultValue={foodUrl}
                />
              </div>
            </div>
            <div className="lg:flex gap-2">
              <div className="form-control w-full">
                <label className="text-xl font-semibold">Expire Date</label>
                <input
                  type="date"
                  placeholder="Expire Date"
                  readOnly
                  className="input input-bordered"
                  value={date}
                />
              </div>
              <div className="form-control w-full">
                <label className="text-xl font-semibold">Pickup Location</label>
                <input
                  type="text"
                  placeholder="Enter Pickup Location"
                  readOnly
                  defaultValue={location}
                  className="input input-bordered"
                  name="location"
                />
              </div>
            </div>

{/* row 3 */}
            <div className="flex items-center gap-3">
              <div className="form-control w-full">
                <label className="text-xl font-semibold">Food ID</label>
                <input
                  type="text"
                  placeholder="Enter Date"
                  readOnly
                  className="input input-bordered"
                  name="id"
                  defaultValue={_id}
                />
              </div>

              <div className="form-control w-full">
                <label className="text-xl font-semibold">User Email</label>
                <input
                  type="text"
                  placeholder="Enter Date"
                  readOnly
                  className="input input-bordered"
                  name="id"
                  defaultValue={email}
                />
              </div>
              
            </div>

            <div className="form-control w-full">
              <label className="text-xl font-semibold">Request Date</label>
              <input
                type="text"
                placeholder="Enter Date"
                readOnly
                className="input input-bordered"
                name="reqDate"
                value={currentDate}
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
            <div className="form-control w-full">
              <label className="text-xl font-semibold">Donate Money</label>
              <input
              type="number"
                name="donation"
                placeholder="Enter Donation money"
                className="input input-bordered p-4"
              ></input>
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
                  readOnly
                  className="input input-bordered"
                  name="donatorName"
                  defaultValue={donatorName}
                />
              </div>
              <div className="form-control w-full">
                <label className="text-xl font-semibold">Donator Image</label>
                <input
                  type="text"
                  placeholder="Enter Image URL"
                  readOnly
                  className="input input-bordered"
                  name="donatorUrl"
                  defaultValue={donatorUrl}
                />
              </div>
            </div>

            <div className="lg:flex gap-2">
              <div className="form-control w-full">
                <label className="text-xl font-semibold">Donator Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  readOnly
                  className="input input-bordered"
                  name="donatorEmail"
                  defaultValue={donatorEmail}
                />
              </div>
              <div className="form-control w-full">
                <label className="text-xl font-semibold">Food status</label>
                <select
                  name="status"
                  id=""
                  className="input input-bordered"
                  disabled
                >
                  {foodQuantity > 0 ? (
                    <>
                      <option value={true} selected>
                        Available
                      </option>
                      <option value={false}>Not Available</option>
                    </>
                  ) : (
                    <>
                      <option value={true}>Available</option>
                      <option value={false}>
                        Not Available
                      </option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <input
                type="submit"
                value="Submit Request"
                className="btn primary-bg"
              />
            </div>
          </form>
        </div>
      </dialog>
      <Toaster></Toaster>
    </div>
  );
};

export default FoodDetails;
