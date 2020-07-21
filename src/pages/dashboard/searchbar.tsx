import React from "react";
import "../../styles/app.css";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const Searchbar: React.FC<{}> = () => {
  return (
    <div className="col-span-1 row-span-1  bg-gray-600  flex p-4">
      <div className="flex-1 bg-white rounded-md  h-full flex  px-4">
        <TextField
          className="flex-1 h-full flex justify-center"
          placeholder="Enter keywords"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};
export default Searchbar;
