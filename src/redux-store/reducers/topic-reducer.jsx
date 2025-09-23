

const defaultTopicReducerState = {
  activeTopics: [],
  unactiveTopics: [],
};

const DownloadActive = "DownloadActive";
const DownloadUnactive = "DownloadUnactive";
const AddActive = "AddActive";

export const topicReducer = (state = defaultTopicReducerState, action) => {
  switch (action.type) {
    case DownloadActive:
      return { ...state, activeTopics: action.payload };
    case AddActive:
      return { ...state, activeTopics: [...state.activeTopics, action.payload] };
    case DownloadUnactive:
      return { ...state, unactiveTopics: action.payload };
    default:
      return state;
  }
};
