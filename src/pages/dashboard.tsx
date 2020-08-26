import React, { useEffect, useState } from "react";
import "../styles/app.css";
import Topbar from "./dashboard/topbar";
import Searchbar from "./dashboard/searchbar";
import Contactlist from "./dashboard/contactlist";
import Content from "./dashboard/content";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [username, setUsername] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo: () => void = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/userInfo`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("auth") },
      })
      .then(({ data }) => {
        setUsername(data.username);
      })
      .catch((err) => {
        //console.log(err);
        history.push("/");
      });
  };

  return (
    <div className="flex flex-row h-screen">
      <div className=" flex-1 md:flex-none md:w-1/3 flex flex-col ">
        <Topbar username={username} />
        <Searchbar />
        <Contactlist />
      </div>
      <Content />
    </div>
  );
};

export default Dashboard;
// Bearer
