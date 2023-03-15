import React, { useState, useEffect } from 'react';

export default function useJsonFetch(url, opts) {
  const [ data, setData ] = useState();
  const [ error, setError ] = useState();
  const [ loading, setLoading ] = useState();
  const [ result, setResult ] = useState();
  
  useEffect(() => {
  	const fetchFunc = async (url, opts) => {
      const response = await fetch(url, opts)
      return response.json();
  	}
    fetchFunc(url, opts)
    .then((data) => setResult(data));
    console.log(result);
    if(url.includes('/data')){
          setData(result.status);
      } else if(url.includes('/error')){
          setError(result.status)
      } else if(url.includes('/loading')){
          setLoading(result.status)
      }
  },[])
  return[data, error, loading]
}