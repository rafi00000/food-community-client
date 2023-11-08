import { useContext, useEffect, useState } from "react";
import useAxiosSecure from './../../Hooks/AxiosSecure';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import FoodreqCard from "./FoodreqCard";


const MyFoodReqPage = () => {
    const {user} = useContext(AuthContext);
    const [userFood, setUserFood] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() =>{
        axiosSecure.get(`/userFoodReq?email=${user.email}`)
        .then(data => {
            setUserFood(data.data);
        })
    }, [])
    console.log(userFood);

    return (
        <div className="grid grid-cols-2 gap-4 my-10">
            {
                userFood.map(food => <FoodreqCard key={food._id} food={food}></FoodreqCard>)
            }
        </div>
    );
};

export default MyFoodReqPage;