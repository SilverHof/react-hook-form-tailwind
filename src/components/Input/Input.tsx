import React, { useState } from "react";

interface InputProps {
   placeholder: string;
   type: "text" | "password";
   error: any;
   value: string;
   onChange: any;
}

export const Input = ({
   placeholder,
   type,
   error,
   value,
   onChange,
}: InputProps) => {
   const [value, setValue] = useState(value);

   const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
   };

   return (
      <label className="label">
         {error}
         <input
            type={type}
            className="input"
            placeholder={placeholder}
            value={value}
            onChange={handleOnChange}
         />
      </label>
   );
};
