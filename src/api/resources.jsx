export const ActiveTopicsResource = "activetopics";
export const UnactiveTopicsResource = "unactivetopics";

export const ActiveItemsResource = (itemId) =>
  ActiveTopicsResource + "/" + itemId + "/items";
