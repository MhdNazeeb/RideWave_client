import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import driverReducer from "./driverSlice";
import adminReducer from "./adminSlice"
import tripdetailsReducer from "./tripdetails";



const persistConfig = { key: "root", storage, version: 1 };

const reducer = combineReducers({
  userReducer,
  driverReducer,
  adminReducer,
  tripdetailsReducer

});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
