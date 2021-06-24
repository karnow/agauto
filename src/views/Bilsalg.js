import React from 'react';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import WarAuto from '../assets/img/ba11.png';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import LogoAg from '../assets/img/AG_Auto_LOGO.jpg';

const StyledWrapper = styled.div`
  position: relative;
  background-image: url(${WarAuto});
  background-repeat: no-repeat;
  background-size: cover;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 10%;
  padding-top: 50px;
  height: 920px;
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
  position: relative;
  text-align: center;
  color: white;
`;
const StyledImg = styled.img`
  width: 300px;
  height: 220px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.3);
`;

const StyledTable = styled.table`
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  color: black;
  width: 40%;
  background-color: #ffe900;
  border-collapse: collapse;
`;
const StyledTd = styled.td`
  border: 0.5px dashed black;
  text-align: left;
  padding-left: 5px;
  width: 20%;
`;

const Bilsalg = () => {
  return (
    <GridTemplate pageType='note'>
      <StyledWrapper>
        <StyledH2>SALG AF KØREKLARE BILER</StyledH2>
        <Paragraph>
          Find din brugte personbil her hos os Vi har et udvalg af de mest populære biler i Danmark.
          Kig forbi og få en prøvetur.
        </Paragraph>
        <div style={{ textAlign: 'center' }}>
          <StyledImg src={LogoAg}></StyledImg>

          <StyledTable>
            <tr>
              <StyledTd>Mærke</StyledTd>
              <StyledTd></StyledTd>
            </tr>
            <tr>
              <StyledTd>Model</StyledTd> <StyledTd></StyledTd>
            </tr>
            <tr>
              <StyledTd>Motor</StyledTd> <StyledTd></StyledTd>
            </tr>
            <tr>
              <StyledTd>Årgang</StyledTd> <StyledTd></StyledTd>
            </tr>
            <tr>
              <StyledTd>Km</StyledTd> <StyledTd></StyledTd>
            </tr>
            <tr>
              <StyledTd>Pris</StyledTd> <StyledTd></StyledTd>
            </tr>
          </StyledTable>
        </div>
      </StyledWrapper>
      {/* <StyledWrapper2></StyledWrapper2> */}
    </GridTemplate>
  );
};
export default Bilsalg;
