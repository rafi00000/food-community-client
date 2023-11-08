const ManageFoodCard = ({ food }) => {
  console.log(food);
  /**
     * Requester Name
    ● Requester Image
    ● Request Time and Date
    ● Status ( there will be a button to change the status to Delivered)
    */

    const {requesterImg, requesterName, reqDate, email} = food;


  return (
  <div className="flex items-center gap-3 rounded-md p-3 border">
        <img src={requesterImg} alt="" className="w-20 h-20"/>
        <div>
            <h1 className="text-xl"><span className="font-semibold">Requester Name:</span> {requesterName}</h1>
            <p className="text-xl"><span className="font-semibold">Request Date:</span> {reqDate}</p>
            <p className="text-xl"><span className="font-semibold">Requester Email:</span> {email}</p>
        </div>
  </div>
  );
};

export default ManageFoodCard;
