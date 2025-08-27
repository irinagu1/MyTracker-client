export const validateCredentials = (userCredentials) => {
  let isValid = true;
  let message = "";

  if (!userCredentials.userName || userCredentials.userName.length == 0) {
    message = "Username is empty";
    isValid = false;
  }

  if (!userCredentials.password || userCredentials.password.length == 0) {
    message = "Password is empty";
    isValid = false;
  }

  return { isValid, message };
};
