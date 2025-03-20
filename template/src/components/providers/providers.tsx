"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@/services/store";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeProvider from "./theme-provider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <AppRouterCacheProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AppRouterCacheProvider>
    </Provider>
  );
};

export default Providers;
