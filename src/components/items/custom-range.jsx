import { Stack, Typography } from "@mui/material";
import CustomDatePicker from "./custom-datepicker";
import { DatePickerFrom, DatePickerTo } from "./ranges-const";

export default function CustomRange() {
  return (
    <>
      <Stack direction="row">
        <Typography>From:</Typography>
        <CustomDatePicker type={DatePickerFrom} />
      </Stack>
      <Stack direction="row">
        <Typography>To:</Typography>
        <CustomDatePicker type={DatePickerTo} />
      </Stack>
    </>
  );
}
