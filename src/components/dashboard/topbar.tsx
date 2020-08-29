import React from "react";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import AccountPopUp from "./accountPopUp";
import AccountPopUpMobile from "./accountPopUpMobile";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      height: 56,
      [theme.breakpoints.up("md")]: {
        height: 64,
      },
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      display: "block",
      [theme.breakpoints.up("md")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: 400,
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
      alignItems: "center",
    },
    sectionMobile: {
      display: "flex",
      paddingRight: 5,
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
      alignItems: "center",
    },
    titleArea: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        marginLeft: 100,
      },
    },
  })
);

const Topbar: React.FC<{}> = ({}) => {
  const { username } = useSelector((state: RootState) => state.userInfo);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.wrapper}>
      <AppBar position="static" color="default">
        <Toolbar>
          <span
            className=" text-2xl text-black"
            style={{ fontFamily: "Indie Flower" }}
          >
            FriendChat
          </span>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Typography className={classes.title} variant="h6" noWrap>
              {username}
            </Typography>
            <IconButton
              edge="end"
              aria-controls={menuId}
              onClick={handleProfileMenuOpen}
              color="inherit"
              style={{ outline: "none" }}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <Typography className={classes.title} variant="h6" noWrap>
              {username}
            </Typography>
            <IconButton
              aria-controls={mobileMenuId}
              onClick={handleMobileMenuOpen}
              color="inherit"
              style={{ outline: "none" }}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <AccountPopUp
        anchorEl={anchorEl}
        menuId={menuId}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
      <AccountPopUpMobile
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
      />
    </div>
  );
};
export default Topbar;
