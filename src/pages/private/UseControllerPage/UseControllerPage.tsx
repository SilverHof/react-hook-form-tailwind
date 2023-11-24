import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../components/Input/Input";

interface FormProps {
   name: string;
   surname: string;
}

export const UseControllerPage = () => {
   const { register, control, handleSubmit } = useForm({
      mode: "onChange",
      defaultValues: {
         name:''
      }
   });

   const submitHandler: SubmitHandler<any> = (data) => {
      console.log(data);
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
                     <Controller
                        name="name"
                        control={control}
                        rules={{
                           required: 'qweqee',
                        }}
                        render={({
                           field,
                           fieldState: { error },
                        }) => {
                           
                           console.log(error)

                           return (
                           <>
                             <p>{error?.message}</p>
                              <input 
                                 {...field}
                                 placeholder="Name"
                                 type="text"
                                 // value={value}
                                 // onChange={(event) => onChange(event.target.value)}
                              />
                           </>
                        )}}
                     />
                     {/* <Controller
                        name="surname"
                        control={control}
                        rules={{
                           required: true,
                        }}
                        render={({
                           field: { value, onChange },
                           fieldState: { error },
                        }) => (
                           <Input
                              placeholder="Surname"
                              type={"text"}
                              error={error}
                              value={value}
                              onChange={onChange}
                           />
                        )}
                     /> */}
                     <button className="button">Submit</button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};
