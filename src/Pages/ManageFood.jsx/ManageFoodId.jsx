import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/AxiosSecure";
import { useParams } from "react-router-dom";
import ManageFoodCard from "./ManageFoodCard";
import toast, { Toaster } from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async";


const ManageFoodId = () => {
  const [reqFoodData, setReqFoodData] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axiosSecure
      .get(`/foodReq?foodId=${id}`)
      .then((data) => {
        setReqFoodData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, axiosSecure]);

  const handleConfirm = (reqId, foodId) =>{
    axiosSecure.patch(`/updateFood/${reqId}`, {status: 'delivered'})
        .then(data => {
            if(data.data.modifiedCount > 0){

                // deleting it after it has been delivered
                const remaining = reqFoodData.filter(foodData => foodData._id !== reqId) ;
                const updated = reqFoodData.find(foodId => foodId._id === reqId) ;
                const newReqFoods = [ ...remaining ,updated];
                setReqFoodData(newReqFoods);
                window.location.reload();

                axiosSecure.delete(`/foods/${foodId}`)
                .then(data => {
                    toast.success('successful update and deleted')
                })
                .catch(err => console.log(err))
            }
        })
  }

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Share Food || Manage Food</title>
        </Helmet>
      <h2 className="text-5xl font-bold primary-btn text-center">
        Food Request
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-10">
        {reqFoodData?.map((food) => (
          <ManageFoodCard key={food._id} food={food} handleConfirm={handleConfirm}></ManageFoodCard>
        ))}
      </div>
      <Toaster></Toaster>
      </HelmetProvider>
    </div>
  );
};

export default ManageFoodId;
