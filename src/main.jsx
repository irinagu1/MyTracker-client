import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import CustomHeader from "./components/general-components/custom-header.jsx";
import CustomFooter from "./components/general-components/custom-footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <App />
  </StrictMode>
);
