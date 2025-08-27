export const CheckResponseStatus = (statusCode) => {
  switch (statusCode) {
    case 200:
      return { success: true };
    case 401:
      return { success: false, message: "Invalid data" };
    case 500:
      return { success: false, message: "Server error" };
    default:
      return { success: false, message: "Something went wrong" };
  }
};
