import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
      .then(response => {
        setData(response.data);
        console.log (response)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.codigo}>{item.nome}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ApiComponent;
