"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@/services/store";
import EmotionProvider from "./emotion-cache-provider";
import ThemeProvider from "./theme-provider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <EmotionProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </EmotionProvider>
    </Provider>
  );
};

export default Providers;
