import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

interface FormProps {
   user: [
      {
         firstName: string;
         lastName: string;
         address: {
            passcode: string;
            country: string;
         };
      }
   ];
}

export const UseFieldArrayPage1 = () => {
   const { register, control, handleSubmit } = useForm<FormProps>({
      defaultValues: {
         user: [
            {
               firstName: "",
               lastName: "",
               address: {
                  passcode: "",
                  country: "",
               },
            },
         ],
      },
   });

   const submitHandler = (data: FormProps) => {
      console.log(data);
   };

   const { fields, append, remove, update, replace } = useFieldArray({
      name: "user",
      control,
   });

   const handleAppend = () => {
      append({
         firstName: "V",
         lastName: "",
         address: {
            passcode: "",
            country: "",
         },
      });
   };

   const handleReplace = () => {
      replace({
         firstName: "Vladimir",
         lastName: "Tosunov",
         address: {
            passcode: "12421",
            country: "Russia",
         },
      });
   };

   const handleUpdate = () => {
      update(0, {
         firstName: "updated",
         lastName: "updated",
         address: {
            passcode: "updated",
            country: "updated",
         },
      });
   };

   return (
      <section className="section">
         <div className="container">
            <div className="inner pt-40">
               <div className="flex flex-col rounded-lg p-4 bg-[orange] max-w-sm">
                  <form
                     className="form"
                     onSubmit={handleSubmit(submitHandler)}
                  >
                     {fields.map((field, index) => {
                        console.log("field", field);
                        console.log("index", index);

                        return (
                           <div key={field.id}>
                              <input
                                 key={field.id}
                                 type="text"
                                 className="input"
                                 placeholder="First Name"
                                 {...register(
                                    `user.${index}.firstName` as const
                                 )}
                              />
                              <input
                                 type="text"
                                 className="input"
                                 placeholder="Last Name"
                                 {...register(
                                    `user.${index}.lastName` as const
                                 )}
                              />
                              <input
                                 type="text"
                                 className="input"
                                 placeholder="Passcode"
                                 {...register(
                                    `user.${index}.address.passcode` as const
                                 )}
                              />
                              <input
                                 type="text"
                                 className="input"
                                 placeholder="Country"
                                 {...register(
                                    `user.${index}.address.country` as const
                                 )}
                              />
                           </div>
                        );
                     })}
                     <button className="button">Submit</button>
                     <button
                        className="button"
                        type="button"
                        onClick={handleAppend}
                     >
                        Append
                     </button>
                     <button
                        className="button"
                        type="button"
                        onClick={handleReplace}
                     >
                        Replace
                     </button>
                     <button
                        className="button"
                        type="button"
                        onClick={handleUpdate}
                     >
                        Update
                     </button>
                     <button
                        className="button"
                        type="button"
                        onClick={() => remove(0)}
                     >
                        Remove All
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};
