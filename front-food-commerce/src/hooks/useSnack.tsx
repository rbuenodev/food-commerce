import { useContext } from "react";
import { SnackContext } from "../contexts/snackContext";

function useSnack() {
  return useContext(SnackContext);
}

export { useSnack };
