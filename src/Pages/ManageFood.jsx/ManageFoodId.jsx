import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/AxiosSecure";
import { useParams } from "react-router-dom";
import ManageFoodCard from "./ManageFoodCard";


const ManageFoodId = () => {

    const [reqFoodData, setReqFoodData] = useState([]);
    const axiosSecure = useAxiosSecure();
    const {id} = useParams();
    console.log(id);
    
    useEffect(() => {
        axiosSecure.get(`/foodReq?foodId=${id}`)
        .then(data => {
            setReqFoodData(data.data);
        })
        .catch(err =>{
            console.log(err);
        })
    }, [axiosSecure, id])

    return (
        <div>
            <h2 className="text-5xl font-bold primary-btn text-center">Food Request</h2>
        <div className="grid grid-cols-2 gap-3 my-10">
            {reqFoodData?.map(food => <ManageFoodCard key={food._id} food={food}></ManageFoodCard>)}
        </div>    
        </div>
        
    );
};

export default ManageFoodId;