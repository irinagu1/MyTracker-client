import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import activateTopic from "../../features/topics/activate-topic";
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
import { ActivateTopic } from "../../redux-store/reducers/topic-reducer";

export default function ActivateTopicButton({ topic }) {
  const dispatch = useDispatch();

  const handleClickActivate = async () => {
    const result = await activateTopic(topic.id);
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
      dispatch({ type: ActivateTopic, payload: result.json });
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
      <Button variant="outlined" onClick={handleClickActivate}>
        Activate
      </Button>
    </>
  );
}
