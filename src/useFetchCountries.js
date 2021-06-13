import { useState, useEffect } from "react";
import axios from "axios";

function useFetchCountries(country, region) {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  //   nacitanie krajin ked sa zmeni coutry alebo region

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/${
      country ? `name/${country}` : "all"
    }`;

    setIsLoading(true);

    axios
      .get(url)
      .then((response) => {
        if (!region) {
          setCountries(response.data);
        } else {
          const newCountires = response.data.filter((item) => {
            return item.region.toLowerCase() === region;
          });

          if (newCountires.length === 0) {
            setIsError(true);
            setIsLoading(false);
            return;
          }
          setCountries(newCountires);
        }
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        console.log(error);
      });
  }, [country, region]);

  return { countries, isLoading, isError };
}

export default useFetchCountries;
