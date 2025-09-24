import { defaultUrl } from "../../api/default-url";
import { ActiveTopicsResource } from "../../api/resources";

const getInitObject = () => {
  return {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  };
};

const postData = async (topicId) => {
  const url = defaultUrl + ActiveTopicsResource + "/" + topicId;
  const object = getInitObject();
  const response = await fetch(url, object);
  if (response.ok) {
    const json = await response.json();
    return { status: "success", json: json };
  } else {
    return { status: "error", json: null };
  }
};

export default async function deactivateTopic(topicId) {
  const result = await postData(topicId);
  return result;
}
