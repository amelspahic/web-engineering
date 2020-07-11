import { API_ENDPOINTS, HTTP_VERBS } from "../constants";
import useApi from "./useApi";

const useCreateAuthor = (author) => {
  const path = API_ENDPOINTS.BOOKS;
  const [{ result: authors, loading, error }, createAuthor] = useApi(path, {
    verb: HTTP_VERBS.POST,
    data: author,
  });
  return [{ authors, loading, error }, createAuthor];
};

export default useCreateAuthor;
