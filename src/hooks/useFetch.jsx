import React, { useEffect, useState } from "react";
import { api, CanceledError } from "../api/apiClient";

const useFetch = (endpoint) => {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const getData = async () => {
      try {
        const response = await api.get(endpoint, {
          signal: controller.signal,
        });
        setData(response?.data);
      } catch (error) {
        if (error instanceof CanceledError) {
          return;
        }
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();

    return () => controller.abort();
  }, [endpoint]);
  return {
    data,
    error,
    isLoading,
  };
};

export default useFetch;
