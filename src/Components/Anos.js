import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Select, MenuItem } from '@material-ui/core';

const ApiAno = () => {
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={selectedValue}
      onChange={handleChange}
      label="Age"
    >
      {data.map(item => (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default ApiSelect;
