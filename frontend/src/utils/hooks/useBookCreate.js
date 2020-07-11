import { API_ENDPOINTS, HTTP_VERBS } from "../constants";
import useApi from "./useApi";

const useCreateBook = (book) => {
  const path = API_ENDPOINTS.BOOKS;
  const [{ result: books, loading, error }, createBook] = useApi(path, {
    verb: HTTP_VERBS.POST,
    data: book,
  });
  return [{ books, loading, error }, createBook];
};

export default useCreateBook;
