import React from 'react';
import useJsonFetch from './Hooks/useJsonFetch';

export default function Data() {
  const [data, error, loading] = useJsonFetch('http://localhost:7070/error', {method: 'GET'});

  if(error && !loading) {
    return (
      <div>Ошибка</div>
    )
  }
}