import React, { useEffect } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface FormProps {
   name: string;
   surname: string;
   email: string;
   password: string;
   repeatPassword: string;
}

export const UseFormPage = () => {
   const {
      register,
      handleSubmit,
      reset,
      getValues,
      getFieldState,
      watch,
      setValue,
      formState: { errors },
   } = useForm<FormProps>({
      mode: "onChange",
   });

   const submitHandler: SubmitHandler<FormProps> = (data) => {
      console.log(data);
   };

   const sumbitErrorHandler: SubmitErrorHandler<FormProps> = (error) => {
      console.log(error);
   };

   console.log("values", getValues("name"));
   console.log("field state", getFieldState("name"));

   useEffect(() => {
      const subscribtion = watch((value, { name, type }) => {
         console.log(value, name, type);
      });

      return () => subscribtion.unsubscribe();
   }, [watch]);

   return (
      <section>
         <div className="container">
            <div className="inner pt-40">
               <div className="flex flex-col rounded-lg p-4 bg-[orange] max-w-sm">
                  <form
                     className="flex flex-col gap-2"
                     onSubmit={handleSubmit(submitHandler, sumbitErrorHandler)}
                  >
                     <label className="label">
                        <span className="text-red-700">
                           {errors.name?.message}
                        </span>
                        <input
                           type="text"
                           placeholder="Name"
                           className={`px-2 py-1 rounded-sm`}
                           {...register("name", {
                              required: "Name is a required field",
                              minLength: 8,
                              maxLength: 24,
                           })}
                        />
                     </label>
                     <input
                        type="text"
                        placeholder="Surname"
                        className={`px-2 py-1 rounded-sm`}
                        {...register("surname", {
                           required: true,
                           minLength: 8,
                           maxLength: 24,
                        })}
                     />
                     <label className="label">
                        <span className="text-red-700">
                           {errors.email?.message}
                        </span>
                        <input
                           type="text"
                           placeholder="Email"
                           className={`px-2 py-1 rounded-sm`}
                           {...register("email", {
                              required: true,
                              pattern: {
                                 value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                 message: "Enter valid email",
                              },
                           })}
                        />
                     </label>
                     <input
                        type="password"
                        placeholder="Password"
                        className={`px-2 py-1 rounded-sm`}
                        {...register("password")}
                     />
                     <input
                        type="password"
                        placeholder="Repeat password"
                        className={`px-2 py-1 rounded-sm`}
                        {...register("repeatPassword")}
                     />
                     <button className="button bg-dark text-white">
                        Submit
                     </button>
                     <button
                        className="button bg-dark text-white"
                        type="button"
                        onClick={() => reset()}
                     >
                        Clear form
                     </button>
                     <button
                        className="button bg-dark text-white"
                        type="button"
                        onClick={() =>{
                           setValue("name", "Vladimir")
                           setValue("surname", "Pilotov")
                        }}
                     >
                        Fill form
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};
