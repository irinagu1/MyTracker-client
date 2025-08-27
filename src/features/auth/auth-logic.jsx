import { useSelector } from "react-redux";
import { CheckResponseStatus } from "./check-response-status";
import { postSignIn } from "./post-sign-in";
import { validateCredentials } from "./validate-credentials";

export async function trySignIn(userCredentials) {
  //validate credentials
  const validationResult = validateCredentials(userCredentials);
  if (!validationResult.isValid) {
    return validationResult;
  }

  //send request to server
  const serverResponse = await postSignIn(userCredentials);
  const responseStatus = CheckResponseStatus(serverResponse.status);
  if (!responseStatus.success) {
    return responseStatus;
  }
  const jsonResponse = await serverResponse.json(); //get access and refresh tokens
  return { success: true, jsonResponse };
}
