import React from 'react';
import useJsonFetch from './Hooks/useJsonFetch';

export default function Data() {
  const [data, error, loading] = useJsonFetch('http://localhost:7070/loading', {method: 'GET'});

  if(loading) {
    return (
      <div>Загрузка...</div>
    )
  }
}