
import toast from 'react-hot-toast';
import useAxiosSecure from './../../Hooks/AxiosSecure';
const FoodreqCard = ({ food, handleCancelReq }) => {
  const { donatorName, location, date, reqDate, donation, status, _id } = food;
  const axiosSecure = useAxiosSecure();


  return (
    <div className="primary-bg p-5 rounded-lg flex items-center justify-between">
      <div>
      <div>
        <p>Req. Date: {reqDate}</p>
        <p>Exp. Date: {date}</p>
      </div>
      <div>
        <p>Donator: {donatorName}</p>
        <p>Location: {location}</p>
      </div>
      </div>
      <div>
        {
          status === "true" ? <button onClick={()=>handleCancelReq(_id)} className="btn btn-sm">Cancel</button> : <span className="text-blue-600 font-bold">Delivered</span>
        }
        <p>Donation: {donation ? donation : 'null'}</p>
      </div>
    </div>
  );
};

export default FoodreqCard;
