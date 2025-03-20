import { RootState } from "../store";

export const getPaletteModeFromStore: (store: RootState) => TPaletteMode = (
  store
) => store.theme.paletteMode;
