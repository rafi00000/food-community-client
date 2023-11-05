import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const location = useLocation() ;
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-infinity loading-lg text-7xl"></span>
    }
    if(user){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to={'/login'} replace={true}></Navigate>
    }
};

export default PrivateRoute;