import { AxiosResponse } from "axios";
import { api } from "./api";
import { SearchQueriesResponse } from "../models/SearchQueries";

export const getSearchQueries = (
  query: string
): Promise<AxiosResponse<SearchQueriesResponse, any>> => {
  return api.get(`search?query=${query}`);
};
