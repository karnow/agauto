import React from 'react';
import styled from 'styled-components';
import Milo from 'components/molecules/Milo';
import GridTemplate from 'templates/GridTemplate';
import WarAuto from '../assets/img/ba11.png';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  position: relative;
  background-image: url(${WarAuto});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 0px;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 10%;
  margin-top: 110px;

  z-index: 1;
`;

const StyledSection = styled.div`
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;
const StyledH2 = styled.h3`
  position: relative;
  color: white;
`;
const StyledA = styled.a`
  color: yellowgreen;
`;

const Notes = () => {
  return (
    <GridTemplate pageType='note'>
      <StyledWrapper>
        <StyledSection>
          <StyledH2 style={{ textAlign: 'center' }}>
            FÅ SKROTPRÆMIE, SKROT DIN BIL HOS EN MILJØGODKENDT AUTO-OPHUG
          </StyledH2>
          <Paragraph style={{ textAlign: 'center' }}>
            Ansøg om skrotningsgodtgørelse via dette{' '}
            <StyledA
              href='https://www.borger.dk/Handlingsside?selfserviceId=c84cf651-6e1b-4ab1-9508-17df4eb96413'
              target='_blank'
            >
              link
            </StyledA>
          </Paragraph>
        </StyledSection>
        <Milo />
        <StyledH2 style={{ marginTop: '40px', textAlign: 'center' }}>
          VI HAR RESERVEDELEN TIL DIN BIL
        </StyledH2>
        <Paragraph style={{ textAlign: 'center', marginTop: '50px' }}>
          Tænk på miljøet! Køb en brugt reservedel med samme funktion som en ny. Det kan være lige
          fra et sidespejl til en brugt motor.
        </Paragraph>
      </StyledWrapper>
    </GridTemplate>
  );
};
export default Notes;
