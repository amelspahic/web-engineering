import { API_ENDPOINTS } from "../constants";
import useApi from "./useApi";

const useAuthors = () => {
  const path = API_ENDPOINTS.AUTHORS;
  const [{ result: authors, loading, error }, getAuthors] = useApi(path);
  return [{ authors, loading, error }, getAuthors];
};

export default useAuthors;
