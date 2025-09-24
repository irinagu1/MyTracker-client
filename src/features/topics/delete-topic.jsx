import { defaultUrl } from "../../api/default-url";
import { UnactiveTopicsResource } from "../../api/resources";

const getInitObject = () => {
  return {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  };
};

const deleteData = async (topicId) => {
  const url = defaultUrl + UnactiveTopicsResource + "/" + topicId;
  const object = getInitObject();
  const response = await fetch(url, object);
  if (response.ok) {
    return { status: "success", json: null };
  } else {
    return { status: "error", json: null };
  }
};

export default async function deleteTopic(topicId) {
  const result = await deleteData(topicId);
  return result;
}
