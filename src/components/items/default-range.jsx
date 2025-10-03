import { MenuItem, Select } from "@mui/material";
import { DefaultRanges } from "./ranges-const";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeRangeTypeToDefault } from "../../redux-store/reducers/range-reducer";

export default function DefaultRange() {
  const dispatch = useDispatch();
  const defaultState = useSelector((state) => state.range.defaultState);

  const handleChange = (event) => {
    dispatch({ type: ChangeRangeTypeToDefault, payload: event.target.value });
  };
  return (
    <Select value={defaultState} label="Age" onChange={handleChange}>
      {DefaultRanges.map((v) => (
        <MenuItem value={v}>{v}</MenuItem>
      ))}
    </Select>
  );
}
