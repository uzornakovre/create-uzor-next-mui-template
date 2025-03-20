"use client";

import { ReactNode } from "react";
import { CacheProvider } from "@emotion/react";
import emotionCache from "@/lib/emotion-cache"; // Импортируем кэш

const EmotionProvider = ({ children }: { children: ReactNode }) => {
  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
};

export default EmotionProvider;
