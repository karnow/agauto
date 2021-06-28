import React from 'react';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import WarAuto from '../assets/img/ba11.png';
import IntertekLogo from '../assets/img/intertekLogo.jpg';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import certifikat from '../assets/certifikat.pdf';

const StyledWrapper = styled.div`
  position: relative;
  background-image: url(${WarAuto});
  background-repeat: no-repeat;
  background-size: cover;
  /* height: 920px; */
  padding-top: 0px;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 10%;
  margin-top: 110px;

  z-index: 1;
`;
const StyledWrapper2 = styled.div`
  position: relative;
  background-color: grey;
  background-size: cover;
  height: 900px;
  padding-top: 20px;
  padding-left: 20%;
  padding-right: 20%;
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
      {/* <StyledWrapper2></StyledWrapper2> */}
    </GridTemplate>
  );
};
export default Notes;
const SytledMiloDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const SytledIntertekLogo = styled.div`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
const StyledLi = styled.li`
  color: #ffe900;
  padding-bottom: 8px;
`;
const StyledGodButton = styled(Button)`
  width: 220px;
  height: 33px;
  color: black;
  background-color: #ffe900;
  :active {
    background-color: white;
  }
  border-radius: 2px;
`;
const DescriptionDiv = styled.div`
  width: 40%;
  padding-right: 10px;
  text-align: justify;
  @media (max-width: 741px) {
    width: 80%;
  }
`;
function Milo() {
  return (
    <div>
      <h2 style={{ textAlign: 'center', color: 'white' }}>MILJØVENLIG AUTO-OPHUG</h2>
      <SytledMiloDiv>
        <DescriptionDiv>
          <Paragraph>
            AG-AUTO ApS ejes af Alex Ghazali, som har mange års erfaring indenfor branchen. Vi
            arbejder efter at sikre høj kvalitet uanset om du ønsker at skrotte/købe/sælge en bil
            eller søger en reservedel. Så ring til os eller kig forbi og få en snak om hvad vi kan
            gøre for dig.
          </Paragraph>
          <Paragraph>
            Vi går meget op i at værne om vores miljø og at skabe et renere miljø for fremtidige
            generationer. Derfor blev AG-AUTO ApS i 2004 miljøgodkendt certificeret af Intertek
            Certification AB og i overenstemmelse med ISO 14001:2015. Så hjælp os med at sikre
            miljøet! Vælg en miljøcertificeret ophug.
          </Paragraph>
          <div style={{ textAlign: 'center' }}>
            <a href={certifikat}>
              <StyledGodButton>Se godkendelsen her</StyledGodButton>
            </a>
          </div>

          <SytledIntertekLogo>
            <img src={IntertekLogo} width='292px' height='104px'></img>
          </SytledIntertekLogo>
        </DescriptionDiv>
        <div style={{ padding: '5px', border: '2px solid yellow', borderRadius: '5px' }}>
          <StyledH2 style={{ color: '#ffe900' }}>VI ...</StyledH2>
          <ul style={{}}>
            <StyledLi>Sælger reservedele</StyledLi>
            <StyledLi>Sælger biler</StyledLi>
            <StyledLi>Køber biler</StyledLi>
            <StyledLi>Eksporterer gods og bil</StyledLi>
            <StyledLi>Modtager skrotbiler</StyledLi>
            <StyledLi>Reparerer din bil</StyledLi>
          </ul>
          <h5 style={{ color: '#ffe900' }}>Vi ser frem til at hjælpe dig med det du søger!</h5>
        </div>
      </SytledMiloDiv>
    </div>
  );
}
