"use client";

import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { getPaletteModeFromStore } from "@/services/theme/selectors";
import { setPaletteMode } from "@/services/theme/theme-slice";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(getPaletteModeFromStore);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as TPaletteMode | null;
    if (storedTheme) {
      dispatch(setPaletteMode(storedTheme));
    }
    setIsMounted(true);
  }, [dispatch]);

  if (!isMounted) return null;

  const theme = createTheme({ palette: { mode } });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
