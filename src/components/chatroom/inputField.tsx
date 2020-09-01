import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "../../styles/app.css";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import InputBase from "@material-ui/core/InputBase";
const InputField: React.FC<{ sendMessage: (text: string) => void }> = ({
  sendMessage,
}) => {
  const [userInput, setInput] = useState<string>("");
  const submitMessage = () => {
    sendMessage(userInput);
    setInput("");
  };
  return (
    <AppBar position="static" color="primary" className="h-24 py-4">
      <Toolbar className=" flex item-center">
        <InputBase
          value={userInput}
          placeholder="Please enter your message"
          className=" w-4/5 bg-white h-16 rounded-full px-6"
          onChange={(event) => setInput(event.target.value)}
        />
        <div className=" flex-1" />
        <IconButton style={{ outline: "none" }} onClick={submitMessage}>
          <SendIcon className=" text-white" style={{ height: 40, width: 40 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default InputField;
