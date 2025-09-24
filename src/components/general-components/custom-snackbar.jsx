import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";

export const AlertSeveritySuccess = "success";
export const AlertSeverityError = "error";

export default function CustomSnackbar(props) {
  return (
    <Snackbar open={props.open} autoHideDuration={6000} onClose={props.onClose}>
      <Alert
        onClose={props.onClose}
        severity={props.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
}
