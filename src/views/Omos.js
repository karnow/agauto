import React from 'react';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import WarAuto from '../assets/img/ba11.png';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles.js';
import zdj1 from '../assets/img/war.jpg';
import zdj2 from '../assets/img/war2.jpg';
import zdj3 from '../assets/img/war3.jpg';
import boss from 'assets/img/boss.svg';

const StyledWrapper2 = styled.div`
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%),
    radial-gradient(at top center, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.4) 120%) #989898;
  background-blend-mode: multiply, multiply;
  position: relative;
  margin-top: 120px;
  background-size: cover;
  z-index: 1;
`;
const StyledSection = styled.div`
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 930px;
`;
const StyledSection2 = styled.div`
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 930px;
`;
const StyledH2 = styled.h3`
  font-style: italic;
  text-align: center;
  color: white;
`;
const Paragraph2 = styled(Paragraph)`
  text-align: justify;
  margin-bottom: 0px;
`;
const StyledHr = styled.hr`
  background-color: #ffe900;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 890px;
  height: 3px;
  border-radius: 1px;
`;
const StyleAjerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  /* border: 2px solid black; */
`;
const EjerDiv = styled.div`
  width: 20%;
`;
const StedForDiv = styled.div`
  width: 20%;
`;
const Omos = () => {
  return (
    <GridTemplate>
      <StyledWrapper2>
        <StyledSection>
          <StyledH2>HVEM ER VI?</StyledH2>
          <Paragraph style={{ textAlign: 'justify' }}>
            Vi er en familieejet ophugger virksomhed med stor fokus på miljø og kvalitet. Dertil er
            god service og rådgivning vigtige værdier for os. I AG-AUTO ApS er vi altid åbne for nye
            udfordrende opgaver. Hold dig derfor ikke tilbage! Kontakt os og vi undersøger hvad vi
            kan gøre for dig.
          </Paragraph>
          <Slider />
        </StyledSection>
        <StyledSection2>
          <StyledH2>PROFIL OG VÆRDIGRUNDLAG</StyledH2>
          <Paragraph2>
            AG-AUTO ApS blev etableret i 2004, og har dermed solidt erfaring indenfor branchen. Vi
            bor i København i smukke omgivelser nær Amager Strandpark og ikke langt fra motorvejen.
            Vi har ca.2.500 m2 areal, og planlægger at udvide indenfor det nærmeste år. AG-AUTO ApS
            har kvalificeret ansatte, som sørger for en hurtig, nem og miljørigtig behandling af
            bilerne. Vi lever op til myndighedernes miljøkrav, og blev i 2004 ISO 14001
            certificeret. For AG-AUTO ApS er det af central betydning, at sikre høj kvalitet og
            service uanset opgaven eller ønske. Vort værdigrundlag er forudsætningen for at skabe et
            godt forhold til vores kunder og samarbejdspartner. Vores indsats for at servicere
            kunderne bygger på samarbejde, personligt ansvar og professionalitet. Vi handler
            hurtigt, men vi går ikke på kompromis med kvaliteten. Vi kommunikerer åbent og med
            respekt. I AG-AUTO ApS beskæftiger vi os primært med ophug af reservedele fra danske
            personbiler/varevogne, køb og salg af biler/varevogne samt transport af gods/biler.
            Størstedelen af vores salg ligger i Danmark, men vi har også en del eksport til
            udlandet, fortrinsvis Afrika. Hos AG-AUTO ApS hjælper vi dig med rådgivning og alt
            papirarbejde uanset om du ønsker at skrotte en bil eller transportere bil/gods/stykgods.
            Vi har også dygtige mekaniker, som kan hjælpe dig med at reparere din bil! Kom forbi med
            bilen, så laver vi en diagnose og giver dig et uforpligtende tilbud.
          </Paragraph2>
          <StyledHr />
          <StyleAjerDiv>
            <EjerDiv>
              <div
                style={{
                  backgroundImage: `url(${boss})`,
                  height: '300px',
                }}
              ></div>
              <p style={{ fontSize: '14px', textAlign: 'center', color: '#ffe900' }}>EJER</p>

              <p style={{ fontSize: '20px', textAlign: 'center', color: '#ffe900' }}>
                Alex Ghazali
              </p>
            </EjerDiv>
            <StedForDiv>
              <div
                style={{
                  backgroundImage: `url(${boss})`,
                  height: '300px',
                }}
              ></div>
              <p style={{ fontSize: '14px', textAlign: 'center', color: '#ffe900' }}>
                STEDFORTRÆDER
              </p>
              <p style={{ fontSize: '20px', textAlign: 'center', color: '#ffe900' }}>
                Fouad Ghazali
              </p>
            </StedForDiv>
          </StyleAjerDiv>
        </StyledSection2>
      </StyledWrapper2>
    </GridTemplate>
  );
};

export default Omos;

function Slider() {
  return (
    <AwesomeSlider className='slider' cssModule={AwsSliderStyles}>
      <div data-src={zdj1} />
      <div data-src={zdj2} />
      <div data-src={zdj3} />
    </AwesomeSlider>
  );
}
