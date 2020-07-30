import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import InputRow from "../components/InputRow";
import axios from "axios";
import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
const Login: React.FC<{}> = ({}) => {
  const history = useHistory();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [msgType, setMsgType] = useState<number>(0);
  const [msgContent, setMsgContent] = useState<string[]>([]);
  const msgBox: React.FC<{ content: string }> = (content) => {
    switch (msgType) {
      case 0:
        return <div className="h-12" />;
      case 1:
        return (
          <div className="w-full bg-green-500 flex items-center flex-row px-4 py-2">
            <CheckCircleIcon className=" text-white" />
            <span className="text-white mx-2 text-xl">{content.content}</span>
          </div>
        );
      case 2:
        return (
          <div className="w-full  bg-red-600 flex items-center flex-row px-4 py-2">
            <ErrorIcon className=" text-white" />
            <span className="text-white mx-2 text-xl">{content.content}</span>
          </div>
        );
      default:
        return <div className="h-12" />;
    }
  };
  const submitData: (event: any) => void = async (event) => {
    event.preventDefault();

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/login`,
      {
        username: username,
        password: password,
      }
    );
    console.log(data);
    if (data.type == 2) {
      setMsgContent(data.content);
      setMsgType(data.type);
    }
    if (data.type == 1) {
      Cookies.set("token", data.content[0]);
      history.push("/dashboard");
    }
  };

  return (
    <div>
      {msgContent.map((content) => {
        return msgBox({ content });
      })}
      <form className="mx-24" onSubmit={submitData}>
        <span className="text-5xl font-bold">Login</span>
        <InputRow
          label="Username"
          placeholder="Enter your username"
          required
          type=""
          onChange={(event: any) => {
            setUsername(event.target.value);
          }}
        />
        <InputRow
          label="Password"
          placeholder="Enter your password"
          type="password"
          onChange={(event: any) => {
            setPassword(event.target.value);
          }}
          required
        />
        <div className="mt-8 flex items-center justify-center">
          <Button
            variant="contained"
            className="h-20 w-64"
            type="submit"
            color="secondary"
          >
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
