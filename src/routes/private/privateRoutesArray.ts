import { RouteType } from "../types/RouteType";
import { PRIVATE_ROUTE_PATH } from "./PRIVATE_ROUTE_PATH";
import { HomePage } from "../../pages/private/HomePage/HomePage";
import { UseFormPage } from "../../pages/private/UseFormPage/UseFormPage";
import { UseControllerPage } from "../../pages/private/UseControllerPage/UseControllerPage";
import { UseFormContextPage } from "../../pages/private/UseFormContextPage/UseFormContextPage";
import { UseWatchPage } from "../../pages/private/UseWatchPage/UseWatchPage";
import { UseFormState } from "../../pages/private/UseFormState/UseFormState";
import { UseFieldArrayPage } from "../../pages/private/UseFieldArrayPage/UseFieldArrayPage";
import { UseFieldArrayPage1 } from "../../pages/private/UseFieldArrayPage1/UseFieldArrayPage1";

export const privateRoutesArray: RouteType[] = [
   {
      path: PRIVATE_ROUTE_PATH.HOME,
      Component: HomePage,
   },
   {
      path: PRIVATE_ROUTE_PATH.USEFORM,
      Component: UseFormPage,
   },
   {
      path: PRIVATE_ROUTE_PATH.USECONTROLLER,
      Component: UseControllerPage,
   },
   {
      path: PRIVATE_ROUTE_PATH.USEFORMCONTEXT,
      Component: UseFormContextPage,
   },
   {
      path: PRIVATE_ROUTE_PATH.USEWATCH,
      Component: UseWatchPage,
   },
   {
      path: PRIVATE_ROUTE_PATH.USEFORMSTATE,
      Component: UseFormState,
   },
   {
      path: PRIVATE_ROUTE_PATH.USEFIELDARRAY,
      Component: UseFieldArrayPage,
   },
   {
      path:PRIVATE_ROUTE_PATH.USEFIELDARRAY1,
      Component: UseFieldArrayPage1,
   }
];
