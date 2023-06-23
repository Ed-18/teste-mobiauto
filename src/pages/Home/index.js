import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import '../../Components/table.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Home = () => {

    const navigate = useNavigate();

    const [dataSelected, setDataSelected] = useState({
        marca: '',
        modelo: '',
        ano: '',
    });

    const handleSelection = (nome, codigo) => {
        setDataSelected((prevState) => ({
            ...prevState,
            [nome]: codigo,
        }));
    };

    const ApiMarca = () => {
        const [data, setData] = useState([]);
        const [selectedValue, setSelectedValue] = useState('');

        useEffect(() => {
            axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }, []);

        const handleChange = (event) => {
            const e = event.target.value;
            setSelectedValue(e.nome);
            handleSelection('marca', e.codigo)


        };



        return (
            <FormControl>
                <InputLabel id='demo-simple-select-label'>Marca</InputLabel>
                <Select className='select'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedValue}
                    onChange={handleChange}
                    label="Age"
                >
                    {data.map(item => (
                        <MenuItem key={item.codigo} value={{ nome: item.nome, codigo: item.codigo }}>
                            {item.nome}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        )
    };

    const ApiModelo = () => {
        const [data, setData] = useState([]);
        const [selectedValue, setSelectedValue] = useState('');

        useEffect(() => {
            axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${dataSelected.marca}/modelos`)
                .then(response => {
                    setData(response.data.modelos);
                })
                .catch(error => {
                    console.error(error);
                });
        }, []);

        const handleChange = (event) => {
            const e = event.target.value;
            setSelectedValue(e.nome);
            handleSelection('modelo', e.codigo);
        };

        return (
            <FormControl>
                <InputLabel id='demo-simple-select-label'>Modelo</InputLabel>
                <Select className='select'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedValue}
                    onChange={handleChange}
                    label="Age"
                >
                    {data.map(item => (
                        <MenuItem key={item.codigo} value={{ nome: item.nome, codigo: item.codigo }}>
                            {item.nome}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        )
    };


    const ApiAno = () => {
        const [data, setData] = useState([]);
        const [selectedValue, setSelectedValue] = useState('');

        useEffect(() => {
            axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${dataSelected.marca}/modelos/${dataSelected.modelo}/anos`)
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }, []);

        const handleChange = (event) => {
            const e = event.target.value;
            setSelectedValue(e.nome);
            handleSelection('ano', e.codigo);
        };

        return (
            <FormControl className='select' >
                <InputLabel id='demo-simple-select-label'>Ano</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedValue}
                    onChange={handleChange}
                    label="Age"
                >
                    {data.map(item => (
                        <MenuItem key={item.codigo} value={{ nome: item.nome, codigo: item.codigo }}>
                            {item.nome}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    };


    const handleClick = async function () {
        const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${dataSelected.marca}/modelos/${dataSelected.modelo}/anos/${dataSelected.ano}`
        const response = await axios.get(url);
        navigate('/Resultado', { state: response.data });
    };


    return (
        <div className='home'>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <div className='titulo'>
                <h1 style={{ backgroundColor: 'white', fontFamily: 'Roboto, sans-serif', color: '#4A4A4A' }}>Tabela Fipe</h1>

                <h2 style={{ color: "#4A4A4A" }}>Consulte o valor de um veículo de forma gratuita</h2>
            </div>
            <div className='controleform'>

                <ApiMarca />
                <ApiModelo />
                {dataSelected.modelo && <ApiAno />}


                <Button onClick={handleClick} style={{ backgroundColor: '#7624AE' }} variant="contained" disabled={dataSelected.ano ? false : true}>
                    Consultar preço
                </Button>

            </div>

        </div>
    );
};

export default Home;
