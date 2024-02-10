import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { postMiddleware, postReducer, postReducerPath } from "./post";

const rootReducer = combineReducers({
  // auth: authReducer,
  [postReducerPath]: postReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([postMiddleware]);
  },
});

export type RootState = ReturnType<typeof rootReducer>;
