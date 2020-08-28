import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

const AddChatRoomPopUp: React.FC<{
  open: boolean;
  handleClose: () => void;
}> = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create New Chatroom</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter the name of new chatroom !!!
        </DialogContentText>
        <TextField autoFocus margin="dense" label="Name" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddChatRoomPopUp;
