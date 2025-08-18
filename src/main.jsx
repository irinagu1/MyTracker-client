import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux-store/index.jsx";
import CustomHeader from "./components/general-components/custom-header.jsx";
import CustomFooter from "./components/general-components/custom-footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
