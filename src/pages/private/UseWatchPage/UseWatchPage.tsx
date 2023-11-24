import React from "react";
import { Control, useForm, useWatch } from "react-hook-form";

interface FormProps {
   firstName: string;
   lastName: string;
}

export const UseWatchPage = () => {
   const { register, control, handleSubmit } = useForm<FormProps>();

   const submitHandler = (data: FormProps) => {
      console.log(data);
   };

   return (
      <section className="section">
         <div className="container">
            <div className="inner pt-40">
               <div className="flex flex-col rounded-lg p-4 bg-[orange] max-w-sm">
                  <form
                     className="flex flex-col gap-2"
                     onSubmit={handleSubmit(submitHandler)}
                  >
                     <input
                        className="input"
                        type="text"
                        {...register("firstName")}
                     />
                     <input
                        className="input"
                        type="text"
                        {...register("lastName")}
                     />
                     <button className="button">Submit</button>
                     <FirstNameWatch control={control} />
                     <LastNameWatch control={control} />
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};

const FirstNameWatch = ({ control }: { control: Control<FormProps> }) => {
   const firstName = useWatch({
      control,
      name: "firstName",
      defaultValue: "",
   });

   return <p>Watch:{firstName}</p>;
};

const LastNameWatch = ({ control }: { control: Control<FormProps> }) => {
   const lastName = useWatch({
      control,
      name: "lastName",
      defaultValue: "",
   });

   return <p>Watch:{lastName}</p>;
};
