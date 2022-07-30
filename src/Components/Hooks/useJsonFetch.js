import React, { useState, useEffect } from 'react';

export default function useJsonFetch(url, opts) {
  const [ data, setData ] = useState();
  const [ error, setError ] = useState();
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
  	const fetchData = async (url, opts) => {
      const response = await fetch(url);
      const body = await response.json();
      
      body.then((value) => {
      	if(value.status === 'Internal Error'){
      		setError(value.status);
      	}

      })
  	}
  })
}