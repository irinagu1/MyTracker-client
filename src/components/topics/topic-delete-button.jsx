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
import {
  BackendErrorMessage,
  SuccessMessage,
} from "../../features/general/alert-messages";
import {
  AlertOpen,
  GetPayloadObject,
} from "../../redux-store/reducers/alert-reducer";
import { DeleteUnactiveTopic } from "../../redux-store/reducers/topic-reducer";

export default function DeleteTopicButton({ topic }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickDelete = async () => {
    const result = await deleteTopic(topic.id);
    if (result.status == "error") {
      const payloadObject = GetPayloadObject(
        AlertSeverityError,
        BackendErrorMessage
      );
      dispatch({
        type: AlertOpen,
        payload: payloadObject,
      });
    } else {
      dispatch({ type: DeleteUnactiveTopic, payload: topic });
      const payloadObject = GetPayloadObject(
        AlertSeveritySuccess,
        SuccessMessage
      );
      dispatch({
        type: AlertOpen,
        payload: payloadObject,
      });
      setOpen(false);
    }
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
