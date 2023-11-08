import { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/AxiosSecure";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { ColumnSizing, flexRender, useReactTable, getCoreRowModel } from "@tanstack/react-table";
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

  const handleEdit = (_id) =>{
    console.log(_id);
  } ;



  const handleDelete = (id) =>{
    console.log(id);
  }
  

  const columnDef = [
    {
      accessorKey: 'name',
      header: 'Food Name'
    },
    {
      accessorKey: 'foodQuantity',
      header: 'Quantity'
    },
    {
      accessorKey: 'location',
      header: 'Location'
    },
    {
      accessorKey: 'date',
      header: 'Date'
    },
    {
      accessorKey: "_id", // Assuming "id" is the unique identifier in your JSON data
      header: "Actions",
      cell: ({row}) => <div className="">
        <button className="btn" onClick={()=>handleEdit(row.original._id)}><AiFillEdit /></button>
        <button className="btn" onClick={() => handleDelete(row.original._id)}><AiFillDelete /></button>
      </div>
      },
  ] ;

  const finalData = useMemo(()=>foodData);
  const finalColumsDef = useMemo(()=>columnDef);

  const tableInstance = useReactTable({
    columns: columnDef,
    data: finalData, 
    getCoreRowModel: getCoreRowModel()
  });



  return (
    <div>
      <h1 className="text-3xl font-semibold text-center primary-btn">My Food chart</h1>
      <table id="customers">
        <thead>
          {tableInstance.getHeaderGroups().map(headerEl => {
            return <tr key={headerEl.id}>
              {
                headerEl.headers.map(columnEl => {
                  return (
                  <th key={columnEl.id} colSpan={columnEl.colSpan}>
                    {flexRender(
                      columnEl.column.columnDef.header,columnEl.getContext()
                    )}
                  </th>)
                })}
            </tr>
          })}
        </thead>

        <tbody>
          {tableInstance.getRowModel().rows.map(rowEl =>{
            return <tr key={rowEl.id}>{rowEl.getVisibleCells().map(cellEl =>{
              return <td key={cellEl.id}>
                {flexRender(cellEl.column.columnDef.cell, cellEl.getContext())}
              </td>
            })}</tr>
          })}
        </tbody>
      </table>
      
      

      
      <h1 className="text-center font-bold text-5xl primary-btn">My Foods</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
        {foodData.map((food) => (
          <div key={food._id} className="flex items-center gap-4 border">
            <img src={food.foodUrl} alt="" className="w-52 border h-52" />
            <div>
              <h3 className="text-2xl">Name:{food.name}</h3>
              <h2>Status: {food.status === "true" && "Available"}</h2>
              <div className="flex gap-3">
                <button className="btn primary-bg" onClick={() =>handleEdit(food._id)}>
                  <AiFillEdit className="text-white"></AiFillEdit>
                </button>
                <button className="btn bg-gradient-to-r from-red-700 to-red-400">
                  <AiFillDelete className="text-white"></AiFillDelete>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageFood;
