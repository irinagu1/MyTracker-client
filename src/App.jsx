//react build-in components
import { BrowserRouter, Route, Routes } from "react-router-dom";

//general components
import AppTheme from "./components/general-components/app-theme";
import CustomHeader from "./components/general-components/custom-header";

//page's elements
import Main from "./pages/Main/main";
import SignIn from "./pages/sign-in/sign-in";
import SignUp from "./pages/sign-up/sign-up";
import { Provider } from "react-redux";
import { store } from "./redux-store/store";
import MainLogged from "./pages/MainLogged/main-logged";

function App(props) {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AppTheme {...props}>
            <CustomHeader>
              <Routes>
                <Route path="" element={<Main />} />
                <Route path="/main" element={<MainLogged/>}/>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </CustomHeader>
          </AppTheme>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
