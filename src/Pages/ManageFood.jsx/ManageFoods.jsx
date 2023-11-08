import { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/AxiosSecure";
import { AiFillDelete, AiFillEdit, AiOutlineSearch } from "react-icons/ai";
import { ColumnSizing, flexRender, useReactTable, getCoreRowModel } from "@tanstack/react-table";
import { Link, useNavigate } from 'react-router-dom';
const ManageFood = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const email = user.email;
  const [foodData, setFoodData] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axiosSecure.get(`/userFood?email=${email}`).then((data) => {
      console.log(data.data);
      setFoodData(data.data);
    });
  }, [email, axiosSecure]);

  // action buttons

  // const handleEdit = (_id) =>{
  //     axiosSecure.patch(`/foods/${_id}`, {})
  //     .then(data =>{
  //       console.log(data);
  //     })
  // };

  const handleDelete = (id) =>{

    axiosSecure.delete(`/foods/${id}`)
    .then(data =>{
      console.log(data.data.deletedCount);
      const remaining = foodData.map(food => food._id !== id);
      setFoodData(remaining);
      window.location.reload();
    })
  };
  


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
        <Link to={`/food/update/${row.original._id}`}><button className="btn bg-green-700 text-white hover:bg-green-600"><AiFillEdit/></button></Link>
        <button className="btn bg-red-700 text-white hover:bg-red-600" onClick={()=>handleDelete(row.original._id)}><AiFillDelete /></button>
        <button className="btn bg-blue-600 text-white hover:bg-blue-700" onClick={() => navigate(`/manage/${row.original._id}`)}><AiOutlineSearch /></button>
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
      <table className="w-full border border-black">
        <thead className="bg-green-600 border border-black text-white">
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
            return <tr className="border border-black" key={rowEl.id}>{rowEl.getVisibleCells().map(cellEl =>{
              return <td key={cellEl.id} className="border border-black p-3">
                {flexRender(cellEl.column.columnDef.cell, cellEl.getContext())}
              </td>
            })}</tr>
          })}
        </tbody>
      </table>
      
      </div>
  );
};

export default ManageFood;
