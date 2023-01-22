import { createBrowserRouter } from "react-router-dom";
import DB from "../layout/DB";
import Main from "../layout/Main";
import Appointment from "../pages/Appointment/Appointment";
import Contactus from "../pages/Contactus/Contactus";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "contact-us",
        element: <Contactus></Contactus>,
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
        path: "/dashboard",
        element: <DB></DB>,
      },
    ],
  },
]);

export default router;
