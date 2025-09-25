import { AlertSeveritySuccess } from "../../components/general-components/custom-snackbar";

const defaultAlertReducerState = {
  open: false,
  severity: AlertSeveritySuccess,
  message: "",
};

export const AlertClose = "AlertClose";
export const AlertOpen = "AlertOpen";

export const alertReducer = (state = defaultAlertReducerState, action) => {
  switch (action.type) {
    case AlertClose:
      return defaultAlertReducerState;
    case AlertOpen:
      return {
        open: true,
        severity: action.payload.severity,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export const GetPayloadObject = (severity, message) => {
  return {
    severity: severity,
    message: message,
  };
};
