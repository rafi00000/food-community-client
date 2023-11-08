const ManageFoodCard = ({ food, handleConfirm }) => {
  console.log(food);

  const { requesterImg, requesterName, reqDate, email, status, _id, foodId } = food;

  return (
    <div className="flex items-center justify-around gap-3 rounded-md p-3 border">
      <img src={requesterImg} alt="" className="w-20 h-20" />
      <div>
        <h1 className="text-xl">
          <span className="font-semibold">Requester Name:</span> {requesterName}
        </h1>
        <p className="text-xl">
          <span className="font-semibold">Request Date:</span> {reqDate}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Requester Email:</span> {email}
        </p>
      </div>
      {status === "true" ? (
        <button className="btn btn-sm bg-green-600 hover:bg-green-700" onClick={()=>handleConfirm(_id, foodId)}>
          Confirm
        </button>
      ) : (
        <p className="text-blue-600 font-bold">Delivered</p>
      )}
    </div>
  );
};

export default ManageFoodCard;
