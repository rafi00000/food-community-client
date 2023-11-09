import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/AxiosSecure";
import FoodCards from "./FoodCards";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [sort, setSort] = useState(1);
  const [search, setSearch] = useState('')
  const axios = useAxiosSecure();

  // available food applied sort in the server

  const handleSearch = (e) =>{
    e.preventDefault();
    const form = e.target;

    const searchValue = form.search.value;
    setSearch(searchValue);
}

  useEffect(() => {
    axios
      .get(`/foods?sort=${sort}&search=${search}`)
      .then((data) => setFoods(data.data));
  }, [sort, axios, search]);

  return (
    <div className="p-5">
      
      <h3 className="text-center text-4xl font-bold primary-btn">
        Available Foods
      </h3>
      <div className="flex items-center justify-between flex-col md:flex-row-reverse">
      <p className="text-center md:text-right" >
        <form onSubmit={handleSearch}>
        <input
          className="input input-bordered"
          placeholder="Search here (Exact match)"
          type="text"
          name="search"
        />
        <input type="submit" value="Search" className="btn primary-bg" />
        </form> 
      </p>

      <select
        name="sort"
        onChange={(e) => setSort(e.target.value)}
        className="input input-bordered"
      >
        <option value="1">{"Low < High (Date)"}</option>
        <option value="-1">{"High < Low (Date)"}</option>
      </select>
      </div>
      
      {/* card section starts here */}
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
          foods.map(food => <FoodCards key={food._id} food={food}></FoodCards>)
        }
      </div>
    </div>
  );
};

export default AvailableFoods;
