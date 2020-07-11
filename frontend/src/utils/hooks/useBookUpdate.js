import { API_ENDPOINTS, HTTP_VERBS } from "../constants";
import useApi from "./useApi";

const useUpdateBook = (id, book) => {
  const path = `${API_ENDPOINTS.BOOKS}/${id}`;
  const [{ result: books, loading, error }, updateBook] = useApi(path, {
    verb: HTTP_VERBS.PATCH,
    data: book,
  });
  return [{ books, loading, error }, updateBook];
};

export default useUpdateBook;
