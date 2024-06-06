import React, { useEffect, useState, useCallback } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};
