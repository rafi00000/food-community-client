import { Link } from "react-router-dom";

const FoodCards = ({ food }) => {
  console.log(food);

  const {
    foodUrl,
    name,
    donatorUrl,
    donatorName,
    foodQuantity,
    location,
    date,
    notes,
    _id,
  } = food;

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <div className="space-y-2 rounded-md border p-5 flex flex-col">
      <div>
        <img src={foodUrl} alt="" className="mx-auto h-56 border" />
        <p className="text-3xl primary-btn font-semibold text-center">
          {name.toProperCase()}
        </p>
        <div className="flex justify-between items-center">
          <p className="font-semibold primary-btn text-xl">
            Donar: {donatorName}
          </p>
          <img
            src={
              donatorUrl
                ? donatorUrl
                : "https://i.ibb.co/D42rX3Y/pngwing-com.png"
            }
            alt=""
            className="w-12 h-12 rounded-lg border"
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Quantity: {foodQuantity}</p>
          <p className="font-semibold">Location: {location}</p>
        </div>
        <p className="font-bold">Date: {date}</p>
        <p className="font-semibold">
          {notes.length > 100 ? notes.slice(0, 100) : notes}
        </p>
      </div>
      <Link to={`/food/${_id}`} className="">
        <p className="text-center"><button className="btn primary-bg">Show Detail</button></p>
      </Link>
    </div>
  );
};

export default FoodCards;
