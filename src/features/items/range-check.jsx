import {
  DatePickerFrom,
  DatePickerTo,
} from "../../components/items/ranges-const";
import { RangeTypeCustom } from "../../redux-store/reducers/range-reducer";

const DateCompare = (from, to) => {
  if (from === null || to === null) return true;
  if (from > to) return false;
  return true;
};

const ConsiderFromTo = (type, newValue, stateFrom, stateTo) => {
  let from;
  let to;
  if (type == DatePickerFrom) {
    from = newValue;
    to = stateTo;
  } else if (type == DatePickerTo) {
    from = stateFrom;
    to = newValue;
  }
  return { from: from, to: to };
};

export const CheckRange = (type, newValue, stateFrom, stateTo) => {
  const { from, to } = ConsiderFromTo(type, newValue, stateFrom, stateTo);
  const compareResult = DateCompare(from, to);
  return compareResult;
};

export const GetRangeReducerPayloadObject = (
  type,
  newValue,
  stateFrom,
  stateTo
) => {
  const { from, to } = ConsiderFromTo(type, newValue, stateFrom, stateTo);
  return { type: RangeTypeCustom, from: from, to: to };
};
