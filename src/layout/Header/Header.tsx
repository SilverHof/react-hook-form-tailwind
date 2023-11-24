import { NavigatorLink } from "../../components/NavigatorLink/NavigatorLink";

export const Header = () => {
   return (
      <header className="bg-[orange] pt-2 pb-2">
         <div className="container">
            <div className="flex justify-between">
               <NavigatorLink
                  to={"/"}
                  text={"Home"}
               />
               <NavigatorLink
                  to={"/use-form"}
                  text={"useForm"}
               />
               <NavigatorLink
                  to={"/use-controller"}
                  text={"useController"}
               />
               <NavigatorLink
                  to={"/use-form-context"}
                  text={"useFormContext"}
               />
               <NavigatorLink
                  to={"/use-watch"}
                  text={"useWatch"}
               />
               <NavigatorLink
                  to={"/use-form-state"}
                  text={"useFormState"}
               />
               <NavigatorLink
                  to={"/use-field-array"}
                  text={"useFieldArray"}
               />
               <NavigatorLink
                  to={"/use-field-array1"}
                  text={"useFieldArray1"}
               />
            </div>
         </div>
      </header>
   );
};
