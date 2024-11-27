import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export const useGlobalContextHook = () => {
  return useContext(GlobalContext);
};
