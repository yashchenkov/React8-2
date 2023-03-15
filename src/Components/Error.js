import React from 'react';
import useJsonFetch from './Hooks/useJsonFetch';

export default function Data() {
  const error = useJsonFetch('http://localhost:7070/error', {method: 'GET'});

  return (
  	<div>{error.error}</div>
  	)
}