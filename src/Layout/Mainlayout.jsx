import { Outlet } from "react-router-dom";
import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Mainlayout = () => {
  const {loading} = useContext(AuthContext);

  if(loading){
    return (
    <div className="min-h-screen flex justify-center items-center">
      <img src="/loading.gif" alt="" />
    </div>
      )
  }

  return (
    <div className="container mx-auto p-3" >
      <Navbar></Navbar>
      <div className="min-h-screen ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
