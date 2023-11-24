import React from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

interface FormProps {
   firstName: string;
   lastName: string;
}

export const UseFormContextPage = () => {
   const methods = useForm<FormProps>();

   const submitHandler = (data: FormProps) => {
      console.log(data);
   }

   return (
      <section className="section">
         <div className="container">
            <div className="inner pt-40">
               <div className="flex flex-col rounded-lg p-4 bg-[orange] max-w-sm">
                  <FormProvider {...methods}>
                     <form className="flex flex-col gap-2"
                     onSubmit={methods.handleSubmit(submitHandler)}
                     >
                        <NestedInput />
                        <input
                           type="text"
                           {...methods.register("lastName")}
                        />
                        <button className="button">Submit</button>
                     </form>
                  </FormProvider>
               </div>
            </div>
         </div>
      </section>
   );
};

const NestedInput = () => {
   const { register } = useFormContext();

   return (
      <input
         type="text"
         {...register("firstName")}
      />
   );
};
