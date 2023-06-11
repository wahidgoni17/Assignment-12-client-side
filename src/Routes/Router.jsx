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
import PaymentHistory from "../Pages/DashBoardPages/StudentPage/PaymentHistory";
import ManageClasses from "../Pages/DashBoardPages/AdminPage/ManageClasses";
import ManageUsers from "../Pages/DashBoardPages/AdminPage/ManageUsers";
import MyClasses from "../Pages/DashBoardPages/InstructorPage/MyClasses";
import AddClass from "../Pages/DashBoardPages/InstructorPage/AddClass";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/DashBoardPages/StudentPage/Payment";
import NotFound from "../ErrorRoute/NotFound";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classes",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/instructors",
        element: <AllInstructors></AllInstructors>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "selectedClasses",
        element: <SelectedClasses />,
      },
      {
        path: "enrolledClasses",
        element: <EnrolledClasses />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(
            `https://summer-camp-server-side-omega.vercel.app/classCart/${params.id}`
          ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "myClasses",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default Router;
