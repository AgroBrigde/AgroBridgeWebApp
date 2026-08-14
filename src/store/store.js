import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "./userslice";

// ⚠️ FIX: Do NOT import from "redux-persist/lib/storage"!
// Instead, create a manual storage engine directly using the browser's localStorage.
// This bypasses the Vite bundling error completely.
const storage = {
  getItem: (key) => {
    return Promise.resolve(localStorage.getItem(key));
  },
  setItem: (key, value) => {
    return Promise.resolve(localStorage.setItem(key, value));
  },
  removeItem: (key) => {
    return Promise.resolve(localStorage.removeItem(key));
  },
};

// Configuration for Redux Persist
const persistConfig = {
  key: "root",
  storage, // 👈 Use the custom storage engine we just created
  whitelist: ["user"], // Only persist the 'user' slice
};

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
