import React from "react";
import { useFieldArray, useForm } from "react-hook-form";


interface FormProps {
   user: [
      { firstName: string },
      { lastName: string },
      { email: string },
      { address: string }
   ];
}

export const UseFieldArrayPage = () => {
   const { register, control, handleSubmit } = useForm<FormProps>({
      defaultValues: {
         user: [
            { firstName: "" },
            { lastName: "" },
            { email: "" },
            { address: "" },
         ],
      },
   });
   const { fields, append, prepend, remove, swap, insert, replace, update } =
      useFieldArray({
         name: "user",
         control,
        
      });
   console.log("fields", fields);

   const sumbitHandler = (data: FormProps) => {
      console.log(data);
   };

console.log(fields, 'fields')

   const handleAppend = () => {
      append({
         firstName: "",
         lastName: "",
         email: "",
         address: "",
      });
   };

   const handleRemove = (index: number) => {
      remove(index);
   };

   return (
      <section className="section">
         <div className="container">
            <div className="inner pt-40">
               <div className="flex flex-col rounded-lg p-4 bg-[orange] max-w-sm">
                  <form
                     className="form"
                     onSubmit={handleSubmit(sumbitHandler)}
                  >
                     {/* {fields.map((field, index) => {
                        console.log("field", field);
                        console.log("index", index);
                        
                        return (
                           <div key={field.id}>
                              <input
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
                                 placeholder="Email"
                                 {...register(`user.${index}.email` as const)}
                              />
                              <input
                                 type="text"
                                 className="input"
                                 placeholder="Address"
                                 {...register(`user.${index}.address` as const)}
                              />
                           </div>
                        );
                     })} */}


                     {fields.map((field, index) => {
                        console.log("field:", field);
                        console.log("index:", index);

                        return (
                           <div
                              className=""
                              key={field.id}
                           >
                              <input
                              key={field.id}
                                 type="text"
                                 className="input"
                                 {...register(
                                    `user.${index}.firstName` as const
                                 )}
                              />
                                <input
                              key={field.id}
                                 type="text"
                                 className="input"
                                 {...register(
                                    `user.${index}.lastName` as const
                                 )}
                              />
                                <input
                              key={field.id}
                                 type="text"
                                 className="input"
                                 {...register(
                                    `user.${index}.email` as const
                                 )}
                              />
                                <input
                              key={field.id}
                                 type="text"
                                 className="input"
                                 {...register(
                                    `user.${index}.address`
                                 )}
                              />
                              {/* <input
                                 type="text"
                                 className="input"
                                 placeholder={formKeys[index]}
                                 {...register(`user.${index}.]` as const)}
                              /> */}
                              <button
                                 className="button"
                                 type="button"
                                 onClick={() => remove(index)}
                              >
                                 Delete
                              </button>
                           </div>
                        );
                     })}
                     <div className="buttons">
                        <button className="button">Submit</button>
                        <button
                           type="button"
                           className="button"
                           onClick={handleAppend}
                        >
                           Append
                        </button>
                        <button
                           type="button"
                           className="button"
                           onClick={() => remove(0)}
                        >
                           Remove2
                        </button>
                        <button
                           type="button"
                           className="button"
                           onClick={() => update(0, {
                              firstName: "updated",
                              lastName: "updated",
                              email: "updated",
                              address: "updated",
                           })}
                        >
                           Update
                        </button>
                        <button
                           type="button"
                           className="button"
                           onClick={() => swap(0, 3)}
                        >
                           Swap
                        </button>
                        <button
                           type="button"
                           className="button"
                           onClick={() => remove(0)}
                        >
                           Remove
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};
