import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Login from "../Pages/AuthPage/Login";
import Register from "../Pages/AuthPage/Register";
import PrivateRoute from "../components/PrivateRoute";
import HomePage from "../Pages/Home/HomePage";
import AddFood from "../Pages/AddFood/AddFood";
import AvailableFoods from "../Pages/AvaiableFoods/AvailableFoods";
import FoodDetails from "../Pages/AvaiableFoods/FoodDetails";
import ManageFood from "../Pages/ManageFood.jsx/ManageFood";
import UpdateFood from "../Pages/updateFood/UpdateFood";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                index: true,
                element: <HomePage></HomePage>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/available-foods',
                element: <AvailableFoods></AvailableFoods>
            },
            {
                path: '/add-food',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/manage-food',
                element: <PrivateRoute><ManageFood></ManageFood></PrivateRoute>
            },
            {
                path: '/my-food-req',
                element: <div>my food req here</div>
            },
            {
                path: '/food/:id',
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`) ,
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>
            },
            {
                path: '/food/update/:id',
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`),
                element: <UpdateFood></UpdateFood>
            }
        ]
    }
])

export default routes;