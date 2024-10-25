import axios from 'axios';
import { useState, useEffect } from 'react';

const useResource = (baseURL) => {
  const [baseURL, setBaseURL] = useState(baseURL);
  const [token, setToken] = useState(null);

  const getAllResources = async;
  const getResource = async (identifier) => {
    const response = await axios.get(`${baseURL}/${identifier}`);
    return response.data;
  };
  const createResource = async (identifier) => {
    const response = await axios.post(`${baseURL}/${identifier}`);
  };
  return { setToken };
};

const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `https://studies.cs.helsinki.fi/restcountries/api/name/${name}`
      );
      const fetchedCountry = response.data;
      setCountry({
        found: true,
        name: fetchedCountry.name.common,
        capital: fetchedCountry.capital[0],
        population: fetchedCountry.population,
        flag: fetchedCountry.flags.png,
      });
    };
    fetch();
  }, [name]);

  return country;
};

export { useCountry };
