import { createBrowserRouter } from "react-router-dom";
import TriviaPage from "../pages/TriviaPage"
import Login from "../pages/Login";
import Home from "../pages/Home";
import Index from "../pages/Index";
import { Register } from "../pages/Register";
import Isekai from "../pages/categoty/Isekai";
import Spokon from "../pages/categoty/Spokon";
import Shojo from "../pages/categoty/Shojo";
import Seinen from "../pages/categoty/Seinen";
import Shonen from "../pages/categoty/Shonen";
import PlansPage from "../pages/PlansPage";


export const router = createBrowserRouter([
  {
    path: "/random",
    element: <TriviaPage />,
  },
  {
 path:"/plans",
 element: <PlansPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/index",
    element: <Index />,
  },
  {
    path: "/register",
    element: <Register />,
  },
 {
    path: "/isekai",
    element: <Isekai />,
  },
  {
    path: "/spokon",
    element: <Spokon />,
  },
  {
    path: "/seinen",
    element: <Seinen />,
  },
  {
    path: "/shojo",
    element: <Shojo />,
  },
  {
    path: "/shonen",
    element: <Shonen />,
  },
]);
