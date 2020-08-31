import React from "react";
import { TextField } from "@material-ui/core";
import "../../styles/app.css";
const InputRow: React.FC<{
  label: string;
  placeholder: string;
  required: boolean;
  type: string;
  onChange: (event: any) => void;
}> = ({
  label = "",
  placeholder = "",
  required = false,
  type = "",
  onChange = (event) => {},
}) => {
  //console.log("renderInputRow");
  return (
    <div className="mt-4 flex flex-col">
      <TextField
        className="mt-4"
        label={label}
        onChange={onChange}
        placeholder={placeholder}
        required
        type={type}
      />
    </div>
  );
};

export default InputRow;
