export const setAccessToken = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
};

export const setRefreshToken = (refreshToken) => {
  localStorage.setItem("refreshToken", refreshToken);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
