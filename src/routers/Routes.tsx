import { createBrowserRouter } from "react-router-dom";

import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  // ── Public
  { path: "/", element: <Home /> },



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
