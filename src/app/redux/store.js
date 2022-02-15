import { configureStore } from "@reduxjs/toolkit";
import patientSlice from "./modules/patientSlice";

export default configureStore({
  reducer: {
    patient: patientSlice,
  },
  devTools: false,
});
