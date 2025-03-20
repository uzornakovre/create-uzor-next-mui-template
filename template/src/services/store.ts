import { configureStore } from "@reduxjs/toolkit";
import alertsSlice from "./alerts/alerts-slice";
import themeSlice from "./theme/theme-slice";
import { api } from "./api";

const store = configureStore({
  reducer: {
    alerts: alertsSlice,
    theme: themeSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
