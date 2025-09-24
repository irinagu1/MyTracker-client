import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import deleteTopic from "../../features/topics/delete-topic";
import { useDispatch } from "react-redux";
import {
  AlertSeverityError,
  AlertSeveritySuccess,
} from "../general-components/custom-snackbar";

export default function DeleteTopicButton({ topic }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState(AlertSeveritySuccess);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickDelete = async () => {
    const result = await deleteTopic(topic.id);
    if (result.status == "error") {
      ShowAlert("Error on backend part", AlertSeverityError);
    } else {
      dispatch({ type: "DeleteUnactive", payload: topic });
      ShowAlert("Successfully deactivated!", AlertSeveritySuccess);
      setOpen(false);
    }
  };

  const ShowAlert = (message, severity) => {
    setAlertOpen(true);
    setAlertMessage(message);
    setAlertSeverity(severity);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to delete topic {topic.name}?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We cannot reverse this action.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            sx={{ color: "red" }}
            variant="outlined"
            onClick={handleClickDelete}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
