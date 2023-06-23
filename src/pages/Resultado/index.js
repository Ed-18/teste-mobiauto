import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

function Result() {
   const location = useLocation();
   const data = location.state;

   const Container = styled(Box)({
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#F9F6FC',
   })

   const ResultBox = styled(Box)({
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 0',
      backgroundColor: '#DCF5F2',
      gap: '20px',
   });

   const PriceBox = styled('p')({
      borderRadius: '100px',
      padding: '10px 20px',
      backgroundColor: '#00A38C',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '22px',
   });

   const Title = styled('h1')({
      fontSize: '32px',
      fontWeight: 'bolder',
      color: '#4A4A4A',
   })

   return (
      <Container>
         <ResultBox>
            <Title>{`Tabela Fipe: Preço ${data.Marca} ${data.AnoModelo}`}</Title>
            <PriceBox>{data.Valor}</PriceBox>
            <p style={{ fontWeight: 'bold', color: '#8C97AD' }}>Este é o preço de compra do veículo</p>
         </ResultBox>
      </Container>
   );
}

export default Result;