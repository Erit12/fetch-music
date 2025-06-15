import axios from "axios";

import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url);
      console.log(response);
      const result = url.includes("track") ? response.data.track : response.data.album;
      console.log("datos del response");
      console.log(result);
      setData(result);
    } catch (err) {
      setError("Hubo un problema al cargar los datos. Intenta nuevamente");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url) fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}

export default useFetch;