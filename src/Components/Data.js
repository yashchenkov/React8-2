import React from 'react';
import useJsonFetch from './Hooks/useJsonFetch';

export default function Data() {
  const [data, error, loading] = useJsonFetch('http://localhost:7070/data', {method: 'GET'});
  console.log(data);

  if(!loading && data ) {
    return (
      <div>Данные загружены</div>
    )
  }
}