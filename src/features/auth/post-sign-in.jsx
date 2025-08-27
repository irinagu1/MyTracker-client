import { defaultUrl } from "../../api/default-url";

const apiPath = "authentication/login";

const getInitObject = (userCredentials) => {
  return {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userCredentials),
  };
};

export async function postSignIn(userCredentials) {
  const initObject = getInitObject(userCredentials);
  try {
    const response = await fetch(defaultUrl + apiPath, initObject);
    return response;
  } catch (error) {
    return error;
  }
}
