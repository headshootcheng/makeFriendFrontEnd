import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { setRefreshRoomList } from "../../redux/slice/dashboardSlice";
const DeleteChatRoomPopUp: React.FC<{
  roomName: string;
  open: boolean;
  handleClose: () => void;
}> = ({ roomName = "", open = false, handleClose = () => {} }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state: RootState) => state.userInfo);

  const deleteRoom = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/user/deleteRoom`, {
        data: {
          userId: userId,
          roomName: roomName,
        },
      })
      .then(() => {
        handleClose();
        dispatch(setRefreshRoomList());
      });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Delete Chatroom</DialogTitle>
      <DialogContent>
        <DialogContentText>Confirm to delete your room ?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button color="primary" onClick={deleteRoom}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteChatRoomPopUp;
