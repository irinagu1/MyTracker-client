import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import deactivateTopic from "../../features/topics/deactivate-topic";
import CustomSnackbar, {
  AlertSeverityError,
  AlertSeveritySuccess,
} from "../general-components/custom-snackbar";
import { useDispatch, useSelector } from "react-redux";

export default function DeactivateTopicButton(props) {
  const dispatch = useDispatch();

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState(AlertSeveritySuccess);

  const handleClickDeactivate = async () => {
    const result = await deactivateTopic(props.topic.id);
    console.log(result);
    if (result.status == "error") {
      ShowAlert("Error on backend part", AlertSeverityError);
    } else {
      dispatch({ type: "Deactivate", payload: result.json });
      ShowAlert("Successfully deactivated!", AlertSeveritySuccess);
      console.log('showq');
    }
  };

  const ShowAlert = (message, severity) => {
    setAlertOpen(true);
    setAlertMessage(message);
    setAlertSeverity(severity);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickDeactivate}>
        Deactivate
      </Button>
      <CustomSnackbar
        open={alertOpen}
        onClose={handleCloseSnackbar}
        severity={alertSeverity}
        message={alertMessage}
      />
    </>
  );
}
