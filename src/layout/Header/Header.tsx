import { NavigatorLink } from "../../components/NavigatorLink/NavigatorLink";

export const Header = () => {
   return (
      <header className="bg-[orange] pt-2 pb-2">
         <div className="container">
            <div className="flex justify-between">
               <NavigatorLink to={"/"} text={"Home"} />
               <NavigatorLink to={"/about"} text={"About"} />
            </div>
         </div>
      </header>
   );
};
