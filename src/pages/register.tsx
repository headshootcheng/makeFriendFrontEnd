import React, { memo, useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import InputRow from "../components/auth/InputRow";
import axios from "axios";
import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
const Register: React.FC<{}> = ({}) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [msgType, setMsgType] = useState<number>(0);
  const [msgContent, setMsgContent] = useState<string[]>([]);

  const submitData: (event: any) => void = async (event) => {
    event.preventDefault();

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/register`,
      {
        username: username,
        email: email,
        password: password,
        confirmedPassword: confirmedPassword,
      }
    );
    console.log(data);
    setMsgContent(data.content);
    setMsgType(data.type);
  };

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
  return (
    <div>
      {msgContent.map((content) => {
        return msgBox({ content });
      })}
      <form className="mx-24" onSubmit={submitData}>
        <span className="text-5xl font-bold">Register</span>
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
          label="Email"
          placeholder="Enter your email address"
          required
          type="email"
          onChange={(event: any) => {
            setEmail(event.target.value);
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
        <InputRow
          label="Confirmed Password"
          placeholder="Enter your password again"
          type="password"
          onChange={(event: any) => {
            setConfirmedPassword(event.target.value);
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
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
