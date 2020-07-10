import { API_ENDPOINTS } from "../constants";
import useApi from "./useApi";

const useBooks = () => {
  const path = API_ENDPOINTS.BOOKS;
  const [{ result: books, loading, error }, getAuthors] = useApi(path);
  return [{ books, loading, error }, getAuthors];
};

export default useBooks;
