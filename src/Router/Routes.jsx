import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Login from "../Pages/AuthPage/Login";
import Register from "../Pages/AuthPage/Register";
import PrivateRoute from "../components/PrivateRoute";
import HomePage from "../Pages/Home/HomePage";
import AddFood from "../Pages/AddFood/AddFood";
import AvailableFoods from "../Pages/AvaiableFoods/AvailableFoods";
import FoodDetails from "../Pages/AvaiableFoods/FoodDetails";
import ManageFood from "../Pages/ManageFood.jsx/ManageFoods";
import UpdateFood from "../Pages/updateFood/UpdateFood";
import ManageFoodId from "../Pages/ManageFood.jsx/ManageFoodId";
import ErrorPage from "../Pages/Home/Home_component/ErrorPage";
import MyFoodReqPage from "../Pages/Myfoodreq/MyFoodReqPage";
import LeaderBoard from "../Pages/leaderboard/LeaderBoard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/available-foods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-food",
        element: (
          <PrivateRoute>
            <ManageFood></ManageFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-food-req",
        element: (
          <PrivateRoute>
            <MyFoodReqPage></MyFoodReqPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/food/:id",
        loader: ({ params }) =>
          fetch(`https://food-server-rouge.vercel.app/foods/${params.id}`),
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/food/update/:id",
        loader: ({ params }) =>
          fetch(`https://food-server-rouge.vercel.app/foods/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>,
          </PrivateRoute>
        ),
      },
      {
        path: "/manage/:id",
        element: (
          <PrivateRoute>
            <ManageFoodId></ManageFoodId>,
          </PrivateRoute>
        ),
      },
      {
        path: "/leaderboard",
        element: <LeaderBoard></LeaderBoard>
      }
    ],
  },
]);

export default routes;
