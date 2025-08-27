const defaultAuthReducerState = {
  loggedIn: false,
};

const SignIn = "SignIn";
const SignOut = "SignOut";

export const authReducer = (state = defaultAuthReducerState, action) => {
  switch (action.type) {
    case SignIn:
      return { loggedIn: true };
    case SignOut:
      return { loggedIn: false };
    default:
      return state;
  }
};
