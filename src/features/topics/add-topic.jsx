import { defaultUrl } from "../../api/default-url";
import { ActiveTopicsResource } from "../../api/resources";

const getInitObject = (topicName) => {
  const bodyObject = { name: topicName };
  return {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(bodyObject),
  };
};

const postData = async (topicName) => {
  const url = defaultUrl + ActiveTopicsResource;
  const object = getInitObject(topicName);
  const response = await fetch(url, object);
  if (response.ok) {
    const json = await response.json();
    return { status: "success", json: json };
  } else {
    return { status: "error", json: null };
  }
};

export default async function AddTopic(topicName) {
  const result = await postData(topicName);
  return result;
}
