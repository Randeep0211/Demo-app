import { useEffect, useState } from "react";
import { api, CanceledError, AxiosError } from "../api/apiClient";

type Pagination = {
  total: number;
  pages: number;
  page: number;
  limit: number;
};

type MetaData = {
  pagination: Pagination;
};

type FetchData<T> = {
  meta: MetaData | null;
  data: T[];
};

const useFetch = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const getData = async () => {
      try {
        const response = await api.get<FetchData<T>>(endpoint, {
          signal: controller.signal,
        });
        setData(response?.data?.data);
      } catch (error) {
        if (error instanceof CanceledError) {
          return;
        }
        setError((error as AxiosError)?.message);
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
