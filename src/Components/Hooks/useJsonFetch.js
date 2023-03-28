import React, { useState, useEffect } from 'react';

export default function useJsonFetch(url, opts) {
  const [ data, setData ] = useState();
  const [ error, setError ] = useState();
  const [ loading, setLoading ] = useState(true);
  console.log(url);
  useEffect(() => {
  	const fetchFunc = async (url, opts) => {
      try {
        const response = await fetch(url, opts)
        const data = response.json();
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
      
  	}
    fetchFunc(url, opts);
   
  }, [url]);
  return [data, error, loading];
}