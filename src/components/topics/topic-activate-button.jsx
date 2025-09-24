import {
  Button,
} from "@mui/material";
import { useState } from "react";
import CustomSnackbar, {
  AlertSeverityError,
  AlertSeveritySuccess,
} from "../general-components/custom-snackbar";
import { useDispatch } from "react-redux";
import activateTopic from "../../features/topics/activate-topic";

export default function ActivateTopicButton({topic}) {
  const dispatch = useDispatch();

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState(AlertSeveritySuccess);

  const handleClickDeactivate = async () => {
    const result = await activateTopic(topic.id);
    if (result.status == "error") {
      ShowAlert("Error on backend part", AlertSeverityError);
    } else {
      dispatch({ type: "Activate", payload: result.json });
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
        Activate
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
