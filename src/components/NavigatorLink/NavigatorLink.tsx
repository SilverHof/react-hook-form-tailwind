import { NavigatorLinkProps } from "./NavigatorLink.props";
import { NavLink } from "react-router-dom";

export const NavigatorLink = ({ to, text }: NavigatorLinkProps) => {
   const setActive = ({ isActive }) =>
      isActive ? `navigator-link_active` : `navigator-link`;

   return (
      <NavLink
         to={to}
         className={setActive}
      >
         {text}
      </NavLink>
   );
};
