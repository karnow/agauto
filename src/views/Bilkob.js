import React from 'react';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import WarAuto from '../assets/img/ba11.png';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  position: relative;
  background-image: url(${WarAuto});
  background-repeat: no-repeat;
  background-size: cover;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 10%;
  padding-top: 50px;
  margin-top: 110px;
  z-index: 1;
`;

const StyledH2 = styled.h3`
  position: relative;
  text-align: center;
  color: white;
`;
const StyledTable = styled.table`
  border: 2px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  color: black;
  width: 70%;
  background-color: #ffe900;
  border-collapse: collapse;
`;
const StyledTd = styled.td`
  border: 0.5px dashed black;
  text-align: left;
  padding-left: 5px;
  width: 40%;
`;
const Bilkob = () => {
  return (
    <GridTemplate pageType='note'>
      <StyledWrapper>
        <StyledH2>SÆLG ELLER SKROT DIN BIL</StyledH2>
        <Paragraph>Vi er interesseret i både personbiler og varevogne</Paragraph>
        <Paragraph>
          Sælg eller skrot din personbil hos AG-AUTO ApS. Alle bilmærker har vores interesse.
        </Paragraph>
        <Paragraph>
          Du skal blot sende os en mail med oplysninger om bilen. Er vi interesserede, så aftaler vi
          en tid og kører ud og ser på bilen. Vi afhenter biler fra hele sjælland.
        </Paragraph>
        <Paragraph>
          Vi betaler kontant ved afhentning og giver dig højeste dagspris, når du skrotter din bil.
          Vi tager os af al papirarbejdet, du skal blot sælge/skrotte din bil hos os.
        </Paragraph>
        <Paragraph>
          Vi er også interesseretde i at købe varevogne. Har du en af disse varevogne på listen
          nedenfor, så sælg den hurtigt til os og få penge i hånden i dag!
        </Paragraph>

        <div style={{ textAlign: 'center' }}>
          <StyledTable>
            <thead>
              <tr>
                <StyledTd style={{ border: 'solid' }}>Mærke</StyledTd>
                <StyledTd style={{ border: 'solid' }}>Model</StyledTd>
              </tr>
            </thead>
            <tbody>
              <tr>
                <StyledTd>Hyandai</StyledTd> <StyledTd>H1, H100</StyledTd>
              </tr>
              <tr>
                <StyledTd>Mazda</StyledTd> <StyledTd>B2000, E2000, E2200</StyledTd>
              </tr>
              <tr>
                <StyledTd>Mitsubishi</StyledTd> <StyledTd>L200, L300B, Canter</StyledTd>
              </tr>
              <tr>
                <StyledTd>Nissan</StyledTd> <StyledTd>King Van B, Pick Up</StyledTd>
              </tr>
              <tr>
                <StyledTd>Opel</StyledTd> <StyledTd>Campo, Toro</StyledTd>
              </tr>
              <tr>
                <StyledTd>Peugeot</StyledTd> <StyledTd>504, 505, J5</StyledTd>
              </tr>
              <tr>
                <StyledTd>Toyota</StyledTd>
                <StyledTd>Hilux 4x4, Hiace, Liteace dyna, Landcruiser, Corolla D</StyledTd>
              </tr>
            </tbody>
          </StyledTable>
        </div>
      </StyledWrapper>
    </GridTemplate>
  );
};
export default Bilkob;
