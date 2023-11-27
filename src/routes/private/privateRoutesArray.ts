import { RouteType } from "../types/RouteType";
import { PRIVATE_ROUTE_PATH } from "./PRIVATE_ROUTE_PATH";
import { HomePage } from "../../pages/private/HomePage/HomePage";

export const privateRoutesArray: RouteType[] = [
   {
      path: PRIVATE_ROUTE_PATH.HOME,
      Component: HomePage,
   },

];
