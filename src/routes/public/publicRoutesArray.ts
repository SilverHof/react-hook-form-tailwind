import { RouteType } from "../types/RouteType";
import { PUBLIC_ROUTE_PATH } from "./PUBLIC_ROUTE_PATHS";
import { LoginPage } from "../../pages/public/LoginPage/LoginPage";
import { SignUpPage } from "../../pages/public/SignUpPage/SignUpPage";
import { NotFoundPage } from "../../pages/public/NotFoundPage/NotFoundPage";


export const publicRoutesArray: RouteType[] = [
   {
      path: PUBLIC_ROUTE_PATH.LOGIN,
      Component: LoginPage,
   },
   {
      path: PUBLIC_ROUTE_PATH.SIGNUP,
      Component: SignUpPage,
   },
   {
      path: PUBLIC_ROUTE_PATH.NOT_FOUND,
      Component: NotFoundPage,
   }
]