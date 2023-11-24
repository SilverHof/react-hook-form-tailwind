import React from "react";
import { Control, useForm, useFormState } from "react-hook-form";

interface FormProps {
   firstName: string;
   lastName: string;
}

export const UseFormState = () => {
   const { register, handleSubmit, control } = useForm<FormProps>();

   const sumbitHandler = (data: FormProps) => {
      console.log(data);
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
                     <FirstNameSumbitted control={control} />
                     <input
                        type="text"
                        {...register("lastName")}
                     />
                     <button className="button">Submit</button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};

const FirstNameSumbitted = ({ control }: { control: Control<FormProps> }) => {

   const { isSubmitted } = useFormState({
      control
   })

   return (
      <p>
         {isSubmitted ? `Form submited` : `Form didn't sumbited`}
      </p>
   );
};
