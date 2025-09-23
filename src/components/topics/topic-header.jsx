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
import { useDispatch, useSelector } from "react-redux";

export default function TopicHeader() {
  const dispatch = useDispatch();
  const activeTopics = useSelector((state) => state.topics.activeTopics);
  const [newTopicName, setNewTopicName] = useState("");
  const [open, setOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setNewTopicName("");
    setHasError(false);
    setErrorMessage("");
    setOpen(false);
  };
  const handleAdd = async () => {
    if (newTopicName == "") {
      setHasError(true);
      setErrorMessage("Length of new name is 0");
    } else {
      const res = await AddTopic(newTopicName);
      if (res.status == "error") {
        setHasError(true);
        setErrorMessage("sth with backend");
      } else {
        dispatch({ type: "AddActive", payload: res.json});
        setNewTopicName("");
        setHasError(false);
        setErrorMessage("");
        setOpen(false);
      }
    }
  };

  const handleChange = (event) => {
    setNewTopicName(event.target.value);
  };
  return (
    <>
      <Typography>My topics</Typography>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add new topic
      </Button>
      <Dialog open={open} onClose={handleClose}>
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
            onChange={handleChange}
            error={hasError}
          />
          <Typography sx={{ color: "red" }}>{errorMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
