import { useEffect, useState } from "react";

function useCountry(code) {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${code}`
        );
        const data = await res.json();
        setCountry(data[0]);
      } catch {
        setError(true);
      }
      setLoading(false);
    };

    fetchCountry();
  }, [code]);

  return { country, loading, error };
}

export default useCountry;