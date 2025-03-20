import { Alert, Snackbar } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import {
  getAlertMessageFromStore,
  getAlertTypeFromStore,
  getIsAlertOpenFromStore,
} from "../../services/alerts/selectors";
import { closeAlert } from "../../services/alerts/alerts-slice";
import { SNACKBAR } from "./_feedback.style";

const AlertSnackbar = () => {
  const dispatch = useAppDispatch();
  const isAlertOpen = useAppSelector(getIsAlertOpenFromStore);
  const alertType = useAppSelector(getAlertTypeFromStore);
  const alertMessage = useAppSelector(getAlertMessageFromStore);

  return (
    <Snackbar
      open={isAlertOpen}
      autoHideDuration={6000}
      onClose={() => dispatch(closeAlert())}
      sx={SNACKBAR}
    >
      <Alert
        onClose={() => dispatch(closeAlert())}
        severity={alertType}
        variant="filled"
      >
        {alertMessage}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;
