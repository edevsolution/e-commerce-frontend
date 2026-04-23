import { createBrowserRouter } from "react-router-dom";

import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

import Home from "../pages/Home/Home";
import NotFound from "../pages/404/NotFound";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Main from "../components/layout/Main";

const router = createBrowserRouter([
  // ── Public
  { path: "/", element: <Main />, children: [
    { path: "/", element: <Home /> },
    {path: "/login", element: <Login /> },
    {path: "/signup", element: <Signup /> }
  ]},
 



  // ── Private (logged in only)
  {
    element: <PrivateRoute />,
    children: [],
  },


  
  // ── Admin (logged in + role === 'admin')
  {
    element: <AdminRoute />,
    children: [],
  },

  { path: "*", element: <NotFound /> },
]);

export default router;
