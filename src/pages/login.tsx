import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import InputRow from "../components/InputRow";
import axios from "axios";
import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useHistory } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const Login: React.FC<{}> = ({}) => {
  const history = useHistory();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [msgType, setMsgType] = useState<number>(0);
  const [msgContent, setMsgContent] = useState<string>("");
  const msgBox: React.FC<{}> = ({}) => {
    switch (msgType) {
      case 0:
        return <div className="h-12" />;
      case 1:
        return (
          <div className="w-full bg-green-500 flex items-center flex-row px-4 py-2">
            <CheckCircleIcon className=" text-white" />
            <span className="text-white mx-2 text-xl">{msgContent}</span>
          </div>
        );
      case 2:
        return (
          <div className="w-full  bg-red-600 flex items-center flex-row px-4 py-2">
            <ErrorIcon className=" text-white" />
            <span className="text-white mx-2 text-xl">{msgContent}</span>
          </div>
        );
      default:
        return <div className="h-12" />;
    }
  };
  const submitData: (event: any) => void = async (event) => {
    event.preventDefault();

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      {
        username: username,
        password: password,
      }
    );
    console.log(data);
    if (data.message) {
      setMsgType(2);
      setMsgContent(data.message);
    }
    if (data.token) {
      localStorage.setItem("auth", data.token);
      history.push("/dashboard");
    }
  };

  const googleLogin = async (response: any) => {
    console.log(response);
    console.log(response.profileObj);
    const { givenName, email } = response.profileObj;
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/thirdParty`,
      {
        username: givenName,
        email: email,
      }
    );
    if (data.token) {
      localStorage.setItem("auth", data.token);
      history.push("/dashboard");
    }
  };

  const facebookLogin = async (response: any) => {
    console.log(response);
    const { name, email } = response;
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/thirdParty`,
      {
        username: name,
        email: email,
      }
    );
    if (data.token) {
      localStorage.setItem("auth", data.token);
      history.push("/dashboard");
    }
  };

  return (
    <div>
      {msgBox({})}
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
        <div className="mt-8 flex items-center justify-center flex-col  r">
          <Button
            variant="contained"
            className="h-20 w-64"
            type="submit"
            color="secondary"
          >
            Sign In
          </Button>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_ID || ""}
            buttonText="Login with Google"
            className="h-10 w-64 mt-5  justify-center"
            onSuccess={googleLogin}
            onFailure={googleLogin}
          />
          {/* <a href="http://127.0.0.1:8080/auth/google">
            <Button>google</Button>
          </a> */}

          <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_ID || ""}
            textButton=" Login with Facebook"
            icon="fa-facebook"
            cssClass="h-10 w-64 mt-5 bg-blue-700 text-white rounded-sm "
            fields="name,email"
            onClick={() => {}}
            callback={facebookLogin}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
