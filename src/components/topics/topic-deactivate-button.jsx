import { Button } from "@mui/material";
import deactivateTopic from "../../features/topics/deactivate-topic";
import {
  AlertSeverityError,
  AlertSeveritySuccess,
} from "../general-components/custom-snackbar";
import { useDispatch } from "react-redux";

import {
  BackendErrorMessage,
  SuccessMessage,
} from "../../features/general/alert-messages";
import {
  AlertOpen,
  GetPayloadObject,
} from "../../redux-store/reducers/alert-reducer";
import { DeactivateTopic } from "../../redux-store/reducers/topic-reducer";

export default function DeactivateTopicButton(props) {
  const dispatch = useDispatch();

  const handleClickDeactivate = async () => {
    const result = await deactivateTopic(props.topic.id);

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
      dispatch({ type: DeactivateTopic, payload: result.json });
      const payloadObject = GetPayloadObject(
        AlertSeveritySuccess,
        SuccessMessage
      );
      dispatch({
        type: AlertOpen,
        payload: payloadObject,
      });
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickDeactivate}>
        Deactivate
      </Button>
    </>
  );
}
