import { useState, useCallback } from "react";
import client, { getData } from "../apiConfig";
import { HTTP_VERBS } from "../constants";

const useApi = (url, { verb = HTTP_VERBS.GET, data = null } = {}) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const execute = useCallback(
    (obj) => {
      let route = null;
      switch (verb) {
        case HTTP_VERBS.GET:
          route = client.get(url);
          break;
        case HTTP_VERBS.POST:
          route = client.post(url, obj);
          break;
        case HTTP_VERBS.PUT:
          route = client.put(url, obj);
          break;
        case HTTP_VERBS.PATCH:
          route = client.patch(url, obj);
          break;
        case HTTP_VERBS.DELETE:
          route = client.delete(url);
          break;
        default:
          route = client.get(url);
          break;
      }

      return route;
    },
    [url, verb]
  );

  const fetch = useCallback(
    async (obj) => {
      setLoading(true);

      try {
        const response = await execute(obj || data);
        const items = getData(response);
        setResult(items);
        setError(null);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    },
    [execute, data]
  );

  return [{ result, loading, error }, fetch];
};

export default useApi;
