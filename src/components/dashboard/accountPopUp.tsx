import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useHistory } from "react-router-dom";

const AccountPopUp: React.FC<{
  anchorEl: any;
  menuId: string;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
}> = ({ anchorEl, menuId, isMenuOpen, handleMenuClose }) => {
  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem("auth");
    history.push("/");
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
