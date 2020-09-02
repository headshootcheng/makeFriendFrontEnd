import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { exitRoom } from "../../redux/slice/roomSlice";
import { closeChatMode } from "../../redux/slice/dashboardSlice";
const AccountPopUpMobile: React.FC<{
  mobileMoreAnchorEl: any;
  mobileMenuId: string;
  isMobileMenuOpen: boolean;
  handleMobileMenuClose: () => void;
}> = ({
  mobileMoreAnchorEl = "",
  mobileMenuId = "",
  isMobileMenuOpen = false,
  handleMobileMenuClose = () => {},
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { chatMode } = useSelector((state: RootState) => state.dashBoard);
  const { ws } = useSelector((state: RootState) => state.roomInfo);
  const { userId } = useSelector((state: RootState) => state.userInfo);

  const logOut = () => {
    if (chatMode) {
      ws.emit("quitRoom", { userId }, ({ msg }: any) => {
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
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LockIcon />
        </IconButton>
        <p>Reset Password</p>
      </MenuItem>

      <MenuItem onClick={logOut}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ExitToAppIcon />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );
};
export default AccountPopUpMobile;
