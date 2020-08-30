import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { setRefresh } from "../../redux/slice/dashboardSlice";
const AddChatRoomPopUp: React.FC<{
  open: boolean;
  handleClose: () => void;
}> = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [roomName, setRoomName] = useState<string>("");
  const { username, userId } = useSelector(
    (state: RootState) => state.userInfo
  );
  const createRoom = async () => {
    console.log("userId  ", userId);
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/createNewRoom`,
      {
        roomName: roomName,
        owner: username,
        userId: userId,
      },
      {}
    );
    handleClose();
    dispatch(setRefresh());
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create New Chatroom</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter the name of new chatroom !!!
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          onChange={(event) => setRoomName(event.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={createRoom} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddChatRoomPopUp;
