import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Login from "../Pages/AuthPage/Login";
import Register from "../Pages/AuthPage/Register";
import PrivateRoute from "../components/PrivateRoute";
import HomePage from "../Pages/Home/HomePage";
import AddFood from "../Pages/AddFood/AddFood";

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
                element: <div>available foods here</div>
            },
            {
                path: '/add-food',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/manage-food',
                element: <div>manage food here</div>
            },
            {
                path: '/my-food-req',
                element: <div>my food req here</div>
            }
        ]
    }
])

export default routes;