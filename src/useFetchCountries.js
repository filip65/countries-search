import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetchCountries(country, region) {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  //   nacitanie krajin ked sa zmeni coutry alebo region

  const url = `https://restcountries.eu/rest/v2/${
    country ? `name/${country}` : "all"
  }${region ? `?region=${region}` : ""}`;

  const getCountries = useCallback(async () => {
    setIsLoading(true);
    axios
      .get(`${url}`)
      .then((data) => {
        setCountries(data.data);
        setIsError(false);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        console.log(error);
      });
  }, [url]);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return { countries, isLoading, isError };
}

export default useFetchCountries;
