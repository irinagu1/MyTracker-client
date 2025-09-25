const defaultTopicReducerState = {
  activeTopics: [],
  unactiveTopics: [],
};

export const DownloadActiveTopics = "DownloadActive";
export const DownloadUnactiveTopics = "DownloadUnactive";
export const AddActiveTopic = "AddActive";
export const DeactivateTopic = "Deactivate";
export const ActivateTopic = "Activate";
export const DeleteUnactiveTopic = "DeleteUnactive";

export const topicReducer = (state = defaultTopicReducerState, action) => {
  switch (action.type) {
    case DownloadActiveTopics:
      return { ...state, activeTopics: action.payload };
    case AddActiveTopic:
      return {
        ...state,
        activeTopics: [...state.activeTopics, action.payload],
      };
    case DeactivateTopic:
      return {
        ...state,
        activeTopics: state.activeTopics.filter(
          (t) => t.name !== action.payload.name
        ),
        unactiveTopics: [...state.unactiveTopics, action.payload],
      };
    case ActivateTopic:
      return {
        activeTopics: [...state.activeTopics, action.payload],
        unactiveTopics: state.unactiveTopics.filter(
          (t) => t.name !== action.payload.name
        ),
      };
    case DeleteUnactiveTopic:
      return {
        ...state,
        unactiveTopics: state.unactiveTopics.filter(
          (t) => t.name !== action.payload.name
        ),
      };
    case DownloadUnactiveTopics:
      return { ...state, unactiveTopics: action.payload };
    default:
      return state;
  }
};
