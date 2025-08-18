//react build-in components
import { BrowserRouter, Route, Routes } from "react-router-dom";

//general components
import AppTheme from "./components/general-components/app-theme";
import CustomHeader from "./components/general-components/custom-header";

//page's elements
import Main from "./pages/Main/main";
import SignIn from "./pages/sign-in/sign-in";
import SignUp from "./pages/sign-up/sign-up";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <AppTheme {...props}>
          <CustomHeader>
            <Routes>
              <Route path="" element={<Main />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </CustomHeader>
        </AppTheme>
      </BrowserRouter>
    </>
  );
}

export default App;
