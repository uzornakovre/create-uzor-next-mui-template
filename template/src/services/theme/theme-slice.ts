import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IThemeState {
  paletteMode: TPaletteMode;
}

export const initialState: IThemeState = {
  paletteMode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setPaletteMode: (state, action: PayloadAction<TPaletteMode>) => {
      state.paletteMode = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", action.payload);
      }
    },
  },
});

export const { setPaletteMode } = themeSlice.actions;
export default themeSlice.reducer;
