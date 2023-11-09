import { useContext, useEffect, useState } from "react";
import useAxiosSecure from './../../Hooks/AxiosSecure';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import FoodreqCard from "./FoodreqCard";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async";


const MyFoodReqPage = () => {
    const {user} = useContext(AuthContext);
    const [userFood, setUserFood] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() =>{
        axiosSecure.get(`/userFoodReq?email=${user.email}`)
        .then(data => {
            setUserFood(data.data);
        })
    }, [user.email, axiosSecure])
    console.log(userFood);

    const handleCancelReq = (id) =>{
        console.log(id);

        axiosSecure.delete(`/foodsReq/${id}`)
        .then(data =>{
            if(data.data){
                toast.success('deleted successfully');
            }
            const remaining = userFood.filter(food => food._id !== id);
            setUserFood(remaining)
        })

    } ;

    return (
        <div className="grid grid-cols-2 gap-4 my-10">
            <HelmetProvider>
        <Helmet>
          <title>Share Food || Food Req</title>
        </Helmet>
            {
                userFood.map(food => <FoodreqCard key={food._id} food={food} handleCancelReq={handleCancelReq}></FoodreqCard>)
            }
            <Toaster></Toaster>
            </HelmetProvider>
        </div>
    );
};

export default MyFoodReqPage;