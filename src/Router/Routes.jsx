import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Login from "../Pages/AuthPage/Login";
import Register from "../Pages/AuthPage/Register";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                element: <div>this is home route</div>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default routes;