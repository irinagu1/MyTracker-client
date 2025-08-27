import { createStore } from "@reduxjs/toolkit";
import { devToolExtension } from "./dev-tool-extension";
import { rootReducer } from "./root-reducer";

export const store = createStore(rootReducer, devToolExtension);

