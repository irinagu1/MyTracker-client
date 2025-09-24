const defaultTopicReducerState = {
  activeTopics: [],
  unactiveTopics: [],
};

const DownloadActive = "DownloadActive";
const DownloadUnactive = "DownloadUnactive";
const AddActive = "AddActive";
const Deactivate = "Deactivate";
const Activate = "Activate";
const DeleteUnactive = "DeleteUnactive";

export const topicReducer = (state = defaultTopicReducerState, action) => {
  switch (action.type) {
    case DownloadActive:
      return { ...state, activeTopics: action.payload };
    case AddActive:
      return {
        ...state,
        activeTopics: [...state.activeTopics, action.payload],
      };
    case Deactivate:
      return {
        ...state,
        activeTopics: state.activeTopics.filter(
          (t) => t.name !== action.payload.name
        ),
        unactiveTopics: [...state.unactiveTopics, action.payload],
      };
    case Activate:
      return {
        activeTopics: [...state.unactiveTopics, action.payload],
        unactiveTopics: state.unactiveTopics.filter(
          (t) => t.name !== action.payload.name
        ),
      };
    case DeleteUnactive:
      return {
        ...state,
        unactiveTopics: state.unactiveTopics.filter(
          (t) => t.name !== action.payload.name
        ),
      };
    case DownloadUnactive:
      return { ...state, unactiveTopics: action.payload };
    default:
      return state;
  }
};
