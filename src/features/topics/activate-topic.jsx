import { defaultUrl } from "../../api/default-url";
import { UnactiveTopicsResource } from "../../api/resources";

const getInitObject = () => {
  return {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  };
};

const postData = async (topicId) => {
  const url = defaultUrl + UnactiveTopicsResource + "/" + topicId;
  const object = getInitObject();
  const response = await fetch(url, object);
  if (response.ok) {
    const json = await response.json();
    return { status: "success", json: json };
  } else {
    return { status: "error", json: null };
  }
};

export default async function activateTopic(topicId) {
  const result = await postData(topicId);
  return result;
}
