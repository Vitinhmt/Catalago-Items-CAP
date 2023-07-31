import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  async function getData() {
    try {
      setLoading(true);
      const data = await fetch(url);
      const dataBody = await data.json();
      setData(dataBody);
      setLoading(false);
    } catch (error) {
      setError(error);
      alert("Error ao carregar os dados tente novamente mais tarde!!");
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [url]);

  return { data, loading, error };
};
