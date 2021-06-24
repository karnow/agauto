import React from 'react';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import WarAuto from '../assets/img/ba11.png';
import spare from '../assets/img/spare1.jpg';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Resgalery from 'components/molecules/Resgalery';

const StyledWrapper = styled.div`
  position: relative;
  background-image: url(${spare});
  background-repeat: no-repeat;
  background-size: cover;
  /* height: 1200px; */
  padding-top: 0px;
  margin-top: 120px;

  z-index: 1;
`;
const StyledWrapper2 = styled.div`
  position: relative;
  background-color: grey;
  background-size: cover;
  height: 900px;
  padding-top: 20px;
  z-index: 1;
`;
const StyledH2 = styled.h3`
  color: white;
`;
const Reservedele = () => {
  return (
    <GridTemplate pageType='note'>
      <StyledWrapper>
        <div
          style={{
            paddingTop: '50px',
            // marginLeft: 'auto',
            // marginRight: 'auto',
            paddingLeft: '20%',
            paddingRight: '20%',
          }}
        >
          <StyledH2>SALG AF RESERVEDELE</StyledH2>
          <Paragraph>
            Find din reservedel her hos os og værn om miljøet Vi har et udvalg af reservedele fra de
            mest populære bilmærker Du kan forespørge uforpligtende om pris
          </Paragraph>
          <StyledH2>Eksempler på reservedele</StyledH2>
          <Resgalery />
          <StyledH2>Biler til skort</StyledH2>
          <Paragraph style={{ marginBottom: '0px' }}>
            Vi har på nuværende tidspunkt følgende biler til skrot. Ønskes en reservedel fra en af
            bilerne kontakt os
          </Paragraph>
        </div>
      </StyledWrapper>
    </GridTemplate>
  );
};
export default Reservedele;

{
  /* <a href='https://pl.freepik.com/zdjecia/samochod'>
  Samochód zdjęcie utworzone przez peoplecreations - pl.freepik.com
</a>; */
}