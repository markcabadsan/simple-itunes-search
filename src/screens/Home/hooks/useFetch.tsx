import { useState, useEffect } from 'react';

const useFetch = (urlInitial: string): any => {
  const [data, setData] = useState(null);
  const [url, setURL] = useState(urlInitial);

  useEffect(() => {
    if (Boolean(url)) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    } else {
      setData(null);
    }
  }, [url]);

  const fetchData = (url: string): void => setURL(url);

  return [data, fetchData];
};

export default useFetch;
