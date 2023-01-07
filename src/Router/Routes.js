import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment";
import Contactus from "../pages/Contactus/Contactus";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Reviews from "../pages/Reviews/Reviews";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "contact-us",
        element: <Contactus></Contactus>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
