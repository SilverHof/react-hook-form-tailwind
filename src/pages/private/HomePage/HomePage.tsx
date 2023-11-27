import { useState } from "react";
import {
   useFieldArray,
   useForm,
} from "react-hook-form";
import { ulid } from "ulid";

interface DocumentsFormProps {
   documents: [
      {
         name: "Docs";
         type: "docs";
         data: { id: string; name: string; link: string }[];
      },
      {
         name: "Projects";
         type: "projects";
         data: { id: string; name: string; link: string }[];
      },
      {
         name: "Design";
         type: "design";
         data: { id: string; name: string; link: string }[];
      },
      {
         name: "Other";
         type: "other";
         data: { id: string; name: string; link: string }[];
      }
   ];
}

export const HomePage = () => {
   const [selectValue, setSelectValue] = useState<any>("docs");
   const { register, control, handleSubmit } = useForm<DocumentsFormProps>({});
   const { fields, append, update, remove } = useFieldArray({
      control,
      name: "documents",
   });

   const onSubmit = (data: DocumentsFormProps) => {
      console.log("data", data);
   };

   const handleAddButtonClick = () => {
      if (fields.some((obj) => obj.type === selectValue)) {
         const indexOfCurrentField = fields.findIndex(
            (obj) => obj.type === selectValue
         );

         update(indexOfCurrentField, {
            name: selectValue.charAt(0).toUpperCase() + selectValue.slice(1),
            type: selectValue,
            data: [
               ...fields[indexOfCurrentField].data,
               { id: ulid(), name: "", link: "" },
            ],
         });
      } else {
         append({
            name: selectValue.charAt(0).toUpperCase() + selectValue.slice(1),
            type: selectValue,
            data: [{ id: ulid(), name: "", link: "" }],
         });
      }
   };

   const handleDeleteButtonClick = (fieldIndex: number, itemIndex: number) => {
      if (fields?.[fieldIndex].data.length === 1) {
         remove(fieldIndex);
      } else {
         const copyArray = [...fields[fieldIndex].data];
         const removedArray = copyArray
            .slice(0, itemIndex)
            .concat(copyArray.slice(itemIndex + 1));

         update(fieldIndex, { ...fields[fieldIndex], data: removedArray });
      }
   };

   return (
      <section className="section">
         <div className="container">
            <div className="inner pt-40">
               <form
                  className="flex flex-col gap-4"
                  onSubmit={handleSubmit(onSubmit)}
               >
                  <div className="flex flex-col gap-4">
                     <div className="flex gap-4">
                        <select
                           className="p-2"
                           defaultValue={""}
                           onChange={(event) =>
                              setSelectValue(event.target.value)
                           }
                        >
                           <option value="docs">Docs</option>
                           <option value="projects">Projects</option>
                           <option value="design">Design</option>
                           <option value="other">Other</option>
                        </select>
                        <button
                           className="button"
                           type="button"
                           onClick={handleAddButtonClick}
                        >
                           Add
                        </button>
                     </div>

                     <div className="flex flex-col gap-4">
                        {fields.map((field, fieldIndex) => {
                           return (
                              <div
                                 className="flex gap-5 items-center"
                                 key={field.id}
                              >
                                 <div className="flex flex-col gap-2">
                                    <h2 className="text-white">{field.name}</h2>
                                    {field.data.map((item, itemIndex) => {
                                       return (
                                          <div
                                             className="flex gap-4"
                                             key={item.id}
                                          >
                                             {/* <Controller
                                                control={control}
                                                name={`documents.${fieldIndex}.data.${itemIndex}.name`}
                                                render={({ field }) => {
                                                   return (
                                                      <input
                                                         {...fields}
                                                         className="input"
                                                         placeholder="Name"
                                                      />
                                                   );
                                                }}
                                             /> */}
                                             <input
                                                type="text"
                                                className="input"
                                                placeholder="Name"
                                                {...register(
                                                   `documents.${fieldIndex}.data.${itemIndex}.name` as const
                                                )}
                                             />
                                             <input
                                                type="text"
                                                className="input"
                                                placeholder="Link"
                                                {...register(
                                                   `documents.${fieldIndex}.data.${itemIndex}.link` as const
                                                )}
                                             />
                                             <button
                                                className="button"
                                                type="button"
                                                onClick={() =>
                                                   handleDeleteButtonClick(
                                                      fieldIndex,
                                                      itemIndex
                                                   )
                                                }
                                             >
                                                Remove
                                             </button>
                                          </div>
                                       );
                                    })}
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </div>
                  <button className="button">Submit</button>
               </form>
            </div>
         </div>
      </section>
   );
};
