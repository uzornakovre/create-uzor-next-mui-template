type TAlertType = "success" | "error" | "warning" | "info";
type TPaletteMode = "light" | "dark";

interface IAlert {
  type: TAlertType;
  message: string | null;
}
