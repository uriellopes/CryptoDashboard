import { api } from "./api";

export const checkApiServerStatus = () => {
  return api.get("ping");
};
