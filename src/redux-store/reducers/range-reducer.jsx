import { CurrentWeekRange } from "../../components/items/ranges-const";

export const ChangeRangeTypeToCustom = "ChangeRangeTypeToCustom";
export const ChangeRangeTypeToDefault = "ChangeRangeTypeToDefault";

export const RangeTypeDefault = "RangeTypeDefault";
export const RangeTypeCustom = "RangeTypeCustom";

const defaultRangeReducerState = {
  type: RangeTypeDefault,
  defaultState: CurrentWeekRange,
  from: null,
  to: null,
};

export const rangeReducer = (state = defaultRangeReducerState, action) => {
  switch (action.type) {
    case ChangeRangeTypeToCustom:
      return {
        ...state,
        type: RangeTypeCustom,
        from: action.payload.from,
        to: action.payload.to,
      };
    case ChangeRangeTypeToDefault:
      return {
        ...state,
        type: RangeTypeDefault,
        defaultState: action.payload,
      };
    default:
      return state;
  }
};
