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
  margin-top: 110px;
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
const StyledTr = styled.tr``;
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
            <thead>
              <StyledTr>
                <StyledTd>Mærke</StyledTd>
                <StyledTd></StyledTd>
              </StyledTr>
            </thead>
            <tbody>
              <StyledTr>
                <StyledTd>Model</StyledTd> <StyledTd></StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTd>Motor</StyledTd> <StyledTd></StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTd>Årgang</StyledTd> <StyledTd></StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTd>Km</StyledTd> <StyledTd></StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTd>Pris</StyledTd> <StyledTd></StyledTd>
              </StyledTr>
            </tbody>
          </StyledTable>
        </div>
      </StyledWrapper>
    </GridTemplate>
  );
};
export default Bilsalg;
