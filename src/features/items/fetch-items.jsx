import { defaultUrl } from "../../api/default-url";
import { ActiveItemsResource } from "../../api/resources";

const getInitObject = () => {
  return {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };
};

const fetchData = async (resource) => {
  const url = defaultUrl + resource;
  const object = getInitObject();
  const response = await fetch(url, object);
  if (response.ok) {
    const json = await response.json();
    return { status: "success", json: json };
  } else {
    return { status: "error", json: null };
  }
};

export const fetchActiveItems = async (topicId) => {
  const resource = ActiveItemsResource(topicId);
  const activeItemsFromDB = await fetchData(resource);
  return activeItemsFromDB;
};
