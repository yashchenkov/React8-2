import React from 'react';
import useJsonFetch from './Hooks/useJsonFetch';

export default function Data() {
  const loading = useJsonFetch('http://localhost:7070/loading', {method: 'GET'});

  return (
  	<div>{loading.loading}</div>
  	)
}