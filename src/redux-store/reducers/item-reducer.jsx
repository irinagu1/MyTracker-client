const defaultItemReducerState = {
  activeItems: [],
};

export const DownloadActiveItems = "DownloadActiveItems";
export const itemReducer = (state = defaultItemReducerState, action) => {
  switch (action.type) {
    case DownloadActiveItems:
      return { ...state, activeItems: action.payload };
    default:
      return state;
  }
};
