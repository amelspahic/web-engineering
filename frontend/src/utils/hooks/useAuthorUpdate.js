import { API_ENDPOINTS, HTTP_VERBS } from "../constants";
import useApi from "./useApi";

const useUpdateAuthor = (id, author) => {
  const path = `${API_ENDPOINTS.BOOKS}/${id}`;
  const [{ result: authors, loading, error }, updateAuthor] = useApi(path, {
    verb: HTTP_VERBS.PATCH,
    data: author,
  });
  return [{ authors, loading, error }, updateAuthor];
};

export default useUpdateAuthor;
