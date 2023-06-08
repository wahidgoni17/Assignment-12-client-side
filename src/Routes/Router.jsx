import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import DashBoard from "../Layout/DashBoard/DashBoard";
import Home from "../Pages/MainPages/HomePage/Home/Home";
import Login from "../Pages/Login&Signup/Login";
import Signup from "../Pages/Login&Signup/Signup";
import AllClasses from "../Pages/MainPages/ClassesPage/AllClasses";
import AllInstructors from "../Pages/MainPages/AllInstructors/AllInstructors";
import PrivateRoute from "./PrivateRoute";
import SelectedClasses from "../Pages/DashBoardPages/StudentPage/SelectedClasses";
import EnrolledClasses from "../Pages/DashBoardPages/StudentPage/EnrolledClasses";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/classes",
            element: <AllClasses></AllClasses>
        },
        {
            path: "/instructors",
            element: <AllInstructors></AllInstructors>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path : "signup",
            element: <Signup></Signup>
        }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
        {
          path: 'selectedClasses',
          element: <SelectedClasses/>
        },
        {
          path: "enrolledClasses",
          element: <EnrolledClasses/>
        }
    ]
  },
]);
export default Router;
