import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { exitRoom } from "../../redux/slice/roomSlice";
import { closeChatMode } from "../../redux/slice/dashboardSlice";
const AccountPopUp: React.FC<{
  anchorEl: any;
  menuId: string;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
}> = ({
  anchorEl = "",
  menuId = "",
  isMenuOpen = false,
  handleMenuClose = () => {},
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { chatMode } = useSelector((state: RootState) => state.dashBoard);
  const { ws } = useSelector((state: RootState) => state.roomInfo);
  const { userId } = useSelector((state: RootState) => state.userInfo);

  const logOut = () => {
    if (chatMode) {
      ws.emit("quitRoom", { userId }, ({ msg }: any) => {
        //console.log("msg", msg);
        if (msg === "success") {
          console.log("close socket");
          ws.close();
        }
        if (chatMode) {
          dispatch(exitRoom());
          dispatch(closeChatMode());
        }
        localStorage.removeItem("auth");
        history.push("/");
      });
    } else {
      localStorage.removeItem("auth");
      history.push("/");
    }
  };

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Reset Password</MenuItem>
      <MenuItem onClick={logOut}>Logout</MenuItem>
    </Menu>
  );
};

export default AccountPopUp;
