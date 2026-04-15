import { createBrowserRouter } from "react-router-dom";

import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  // ── Public
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },



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
