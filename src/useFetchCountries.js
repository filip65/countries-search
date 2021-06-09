import { useState, useEffect } from "react";
import axios from "axios";

function useFetchCountries(country, region) {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  //   nacitanie krajin ked sa zmeni coutry alebo region

  // const url = `https://restcountries.eu/rest/v2/${
  //   country ? `name/${country}` : "all"
  // }`;
  // // const url = `https://restcountries.eu/rest/v2/${
  // //   country ? `name/${country}` : "all"
  // // }${region ? `?region=${region}` : ""}`;

  // const getCountries = useCallback(async () => {
  //   setIsLoading(true);
  //   axios
  //     .get(`${url}`)
  //     .then((data) => {
  //       if (!region) {
  //         setCountries(data.data);
  //       } else {
  //         setCountries((oldCountries) => {
  //           return oldCountries.filter((item) => {
  //             console.log(item.region);
  //             return item.region === region;
  //           });
  //         });
  //       }
  //       setIsError(false);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setIsError(true);
  //       setIsLoading(false);
  //       console.log(error);
  //     });
  // }, [url, region]);

  // useEffect(() => {
  //   getCountries();
  // }, [getCountries]);

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/${
      country ? `name/${country}` : "all"
    }`;

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
