import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/AxiosSecure";

const ManageFood = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const email = user.email;
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/userFood?email=${email}`).then((data) => {
      console.log(data.data);
      setFoodData(data.data);
    });
  }, [email, axiosSecure]);

  //  using tanstack table

  /*
    "_id": "6548e0fb85f53c520cce0300",
"name": "rafi",
"foodUrl": "rafi",
"foodQuantity": "6",
"location": "rafi",
"date": "2023-11-10",
"notes": "asd;lfkjk",
"donatorName": "Rafiul Islam",
"donatorEmail": "delwar2021bd@gmail.com",
"donatorUrl": "https://lh3.googleusercontent.com/a/ACg8ocIqF2d_4eXhY8-yX3qUs805q1TthRX89Zh7-izs99R3Hqo=s96-c",
"status": "true"
    */

  const column = [
    {
        header: 'name'
    }
];
  return <div></div>;
};

export default ManageFood;
