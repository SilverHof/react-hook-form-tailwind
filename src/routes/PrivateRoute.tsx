import { Navigate, Outlet } from "react-router-dom";
import { PUBLIC_ROUTE_PATH } from "./public/PUBLIC_ROUTE_PATHS";

export const PrivateRoute = () => {
   const user = true;

   return user ? <Outlet /> : <Navigate to={PUBLIC_ROUTE_PATH.LOGIN} />;
};
