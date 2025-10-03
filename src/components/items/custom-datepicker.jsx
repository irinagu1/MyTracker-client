import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CheckRange,
  GetRangeReducerPayloadObject,
} from "../../features/items/range-check";
import { AlertSeverityError } from "../general-components/custom-snackbar";
import { IncorrectRange } from "../../features/general/alert-messages";
import {
  AlertOpen,
  GetPayloadObject,
} from "../../redux-store/reducers/alert-reducer";
import { ChangeRangeTypeToCustom } from "../../redux-store/reducers/range-reducer";
import { DatePickerFrom } from "./ranges-const";

export default function CustomDatePicker({ type }) {
  const dispatch = useDispatch();

  const stateFrom = useSelector((state) => state.range.from);
  const stateTo = useSelector((state) => state.range.to);

  const [value, setValue] = useState(dayjs(null));

  const openAlert = (type, severity, message) => {
    const payloadObject = GetPayloadObject(severity, message);
    dispatch({ type: type, payload: payloadObject });
  };

  const changeRangeReducerState = (type, newValue, stateFrom, stateTo) => {
    const payload = GetRangeReducerPayloadObject(
      type,
      newValue,
      stateFrom,
      stateTo
    );
    dispatch({ type: ChangeRangeTypeToCustom, payload: payload });
  };

  const handleChange = (newValue) => {
    const isValidRange = CheckRange(type, newValue, stateFrom, stateTo);
    console.log(isValidRange);
    if (isValidRange)
      changeRangeReducerState(type, newValue, stateFrom, stateTo);
    else 
      {
        changeRangeReducerState(type, null, stateFrom, stateTo);
        openAlert(AlertOpen, AlertSeverityError, IncorrectRange);
      }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={type === DatePickerFrom ? stateFrom : stateTo}
        onChange={handleChange}
      />
    </LocalizationProvider>
  );
}
