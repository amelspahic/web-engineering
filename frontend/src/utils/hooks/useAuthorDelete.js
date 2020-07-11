import { API_ENDPOINTS, HTTP_VERBS } from "../constants";
import useApi from "./useApi";

const useDeleteAuthor = (id) => {
  const path = `${API_ENDPOINTS.BOOKS}/${id}`;
  const [{ result: authors, loading, error }, deleteAuthor] = useApi(path, {
    verb: HTTP_VERBS.DELETE,
  });
  return [{ authors, loading, error }, deleteAuthor];
};

export default useDeleteAuthor;
