import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/AxiosSecure";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [sort, setSort] = useState(1);
  const [search, setSearch] = useState("");
  const axios = useAxiosSecure();

  // available food applied sort in the server

  console.log(sort, search);

  const handleSearch = (e) =>{
    e.preventDefault();
    const searchValue = e.target.search.value;
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
      <p className="text-center md:text-right" >
        <form onSubmit={handleSearch}>
        <input
          className="input input-bordered"
          placeholder="Search here"
          type="text"
          name="search"
        />
        </form> 
      </p>

      <select
        name="sort"
        id=""
        onChange={(e) => setSort(e.target.value)}
        className="input input-bordered"
      >
        <option value="1">{"Low < High"}</option>
        <option value="-1">{"High < Low"}</option>
      </select>
      <div></div>
    </div>
  );
};

export default AvailableFoods;
