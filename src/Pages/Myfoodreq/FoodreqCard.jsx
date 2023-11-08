
const FoodreqCard = ({ food }) => {
  const { donatorName, location, date, reqDate, donation, status, donatorEmail } = food;

  return (
    <div className="primary-bg p-5 rounded-lg flex items-center justify-between">
      <div>
      <div>
        <p>Req. Date: {reqDate}{donatorEmail}</p>
        <p>Exp. Date: {date}</p>
      </div>
      <div>
        <p>Donator: {donatorName}</p>
        <p>Location: {location}</p>
      </div>
      </div>
      <div>
      <p>Status: <span className="text-blue-500">{status === 'true' ? 'Available' : 'Delivered'}</span></p>
        <p>Donation: {donation ? donation : 'null'}</p>
      </div>
    </div>
  );
};

export default FoodreqCard;
