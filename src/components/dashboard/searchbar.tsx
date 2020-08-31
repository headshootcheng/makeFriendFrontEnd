import React from "react";
import "../../styles/app.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useDispatch } from "react-redux";
import { setKeyword } from "../../redux/slice/searchSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      width: "80%",
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
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  })
);

const Searchbar: React.FC<{ handleOpen: () => void }> = ({
  handleOpen = () => {},
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <AppBar position="sticky" color="primary" className="h-20 py-2">
      <Toolbar className=" flex item-center">
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={(event) => {
              dispatch(setKeyword(event.target.value));
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className="flex-1" />
        <IconButton style={{ outline: "none" }} onClick={handleOpen}>
          <AddCircleIcon
            className=" text-white"
            style={{ height: 30, width: 30 }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Searchbar;
