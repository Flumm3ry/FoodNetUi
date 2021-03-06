import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: appSlice
})

export default store
export type RootState = ReturnType<typeof store.getState>
