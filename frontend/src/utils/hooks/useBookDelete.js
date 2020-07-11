import { API_ENDPOINTS, HTTP_VERBS } from "../constants";
import useApi from "./useApi";

const useDeleteBook = (id) => {
  const path = `${API_ENDPOINTS.BOOKS}/${id}`;
  const [{ result: books, loading, error }, deleteBook] = useApi(path, {
    verb: HTTP_VERBS.DELETE,
  });
  return [{ books, loading, error }, deleteBook];
};

export default useDeleteBook;
