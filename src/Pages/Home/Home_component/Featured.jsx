import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/AxiosSecure";
import FoodCards from "../../AvaiableFoods/FoodCards";
import { useNavigate } from "react-router-dom";

const Featured = () => {
    const axiosSecure = useAxiosSecure();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
    axiosSecure
      .get(`/food/high`)
      .then((data) => setData(data.data.slice(0,6)));
    }, [axiosSecure]);
    
    console.log(data);
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
            <h2 className='text-3xl font-bold primary-btn text-center '>Featured Foods</h2>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            {
                data.map(food => <FoodCards key={food._id} food={food}></FoodCards>)
            }
            </div>

            <button className="btn primary-bg" onClick={()=>navigate('/available-foods')}>View All</button>
            </div>
        </div>
    );
};

export default Featured;