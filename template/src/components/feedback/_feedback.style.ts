export const SNACKBAR = {
  left: "50% !important",
  transform: "translateX(-50%)",
  zIndex: 100000,
};

export const PRELOADER_OVERLAY = {
  display: "flex",
  zIndex: 1000,
  transition: "opacity 0.2s linear, visibility 0.2s linear",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  justifyContent: "center",
  alignItems: "center",
};
