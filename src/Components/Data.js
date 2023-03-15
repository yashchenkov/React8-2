import React from 'react';
import useJsonFetch from './Hooks/useJsonFetch';

export default function Data() {
  const data = useJsonFetch('http://localhost:7070/data', {method: 'GET'});
  console.log(data);

  return (
  	<div>{data.data}</div>
  	)
}