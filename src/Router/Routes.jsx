import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";

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
                
            }
        ]
    }
])

export default routes;