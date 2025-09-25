import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddTopic from "../../features/topics/add-topic";
import { useDispatch } from "react-redux";
import { AlertOpen, GetPayloadObject } from "../../redux-store/reducers/alert-reducer";
import { AlertSeveritySuccess } from "../general-components/custom-snackbar";
import {
  BackendErrorMessage,
  SuccessMessage,
} from "../../features/general/alert-messages";
import { AddActiveTopic } from "../../redux-store/reducers/topic-reducer";

export default function TopicHeader() {
  const dispatch = useDispatch();

  const [newTopicName, setNewTopicName] = useState("");
  const [openDialogWindow, setOpenDialogWindow] = useState(false);
  const [hasErrorInTextField, setHasErrorInTextField] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOpenDialogClick = () => {
    setOpenDialogWindow(true);
  };

  const handleCloseDialog = () => {
    setNewTopicName("");
    setHasErrorInTextField(false);
    setErrorMessage("");
    setOpenDialogWindow(false);
  };

  const handleAddButtonClick = async () => {
    if (newTopicName == "") {
      handleErrorInTextField(true, "Length of new name is 0");
    } else {
      const res = await AddTopic(newTopicName);
      if (res.status == "error") {
        handleErrorInTextField(true, BackendErrorMessage);
      } else {
        dispatch({ type: AddActiveTopic, payload: res.json });
        handleCloseDialog();
        const payloadObject = GetPayloadObject(
          AlertSeveritySuccess,
          SuccessMessage
        );
        dispatch({
          type: AlertOpen,
          payload: payloadObject,
        });
      }
    }
  };

  const handleErrorInTextField = (isError, message) => {
    setHasErrorInTextField(isError);
    setErrorMessage(message);
  };

  const handleChangeTopicName = (event) => {
    setNewTopicName(event.target.value);
  };

  return (
    <>
      <Typography>My topics</Typography>
      <Button variant="outlined" onClick={handleOpenDialogClick}>
        Add new topic
      </Button>
      <Dialog open={openDialogWindow} onClose={handleCloseDialog}>
        <DialogTitle>Add new topic</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter new topic name</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="newTopicName"
            label="Topic name"
            fullWidth
            variant="standard"
            value={newTopicName}
            onChange={handleChangeTopicName}
            error={hasErrorInTextField}
          />
          <Typography sx={{ color: "red" }}>{errorMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleAddButtonClick}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
