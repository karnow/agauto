import React from 'react';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import boss from 'assets/img/boss.svg';
import Slider from 'components/molecules/Slider';
import { StyledImage } from 'components/molecules/Kontakt';
import telefon from '../assets/icons/phone.svg';
import mobil from '../assets/icons/mobil.svg';
import email from '../assets/icons/email.svg';
import fax from '../assets/icons/fax.svg';

const StyledWrapper2 = styled.div`
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%),
    radial-gradient(at top center, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.4) 120%) #989898;
  background-blend-mode: multiply, multiply;
  margin-top: 110px;
  padding-bottom: 30px;
  padding-left: 20%;
  padding-right: 20%;
  z-index: 1;
`;
const StyledSection = styled.div`
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;
const StyledSection2 = styled.div`
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;
const StyledKontaktSection = styled.div`
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
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
  width: 80%;
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
const StylesParagraph = styled.p`
  font-size: 28px;
  margin: 0 0;
  font-style: oblique;
  font-weight: bold;
`;
const StyledSpan = styled.div`
  margin-left: 0px;
  padding: 30px 0 30px;
`;
const StylesParagraphKontakt = styled(StylesParagraph)`
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
const Iframediv = styled.div`
  padding: 1% 1%;
  height: 400px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 576px) {
    height: 250px;
    width: 250px;
  }
`;
const BossDiv = styled.div`
  background-image: url(${boss});
  background-repeat: no-repeat;
  height: 300px;
  @media (max-width: 576px) {
    height: 100px;
  }
`;
const Omos = () => {
  return (
    <GridTemplate>
      <StyledWrapper2>
        <StyledSection>
          <StyledH2>HVEM ER VI?</StyledH2>
          <Paragraph2>
            Vi er en familieejet ophugger virksomhed med stor fokus på miljø og kvalitet. Dertil er
            god service og rådgivning vigtige værdier for os.
          </Paragraph2>
          <Paragraph2 style={{ marginBottom: '30px' }}>
            I AG-AUTO ApS er vi altid åbne for nye udfordrende opgaver. Hold dig derfor ikke
            tilbage! Kontakt os og vi undersøger hvad vi kan gøre for dig.
          </Paragraph2>
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
            certificeret.
          </Paragraph2>
          <Paragraph2>
            For AG-AUTO ApS er det af central betydning, at sikre høj kvalitet og service uanset
            opgaven eller ønske. Vort værdigrundlag er forudsætningen for at skabe et godt forhold
            til vores kunder og samarbejdspartner. Vores indsats for at servicere kunderne bygger på
            samarbejde, personligt ansvar og professionalitet. Vi handler hurtigt, men vi går ikke
            på kompromis med kvaliteten. Vi kommunikerer åbent og med respekt.
          </Paragraph2>
          <Paragraph2>
            I AG-AUTO ApS beskæftiger vi os primært med ophug af reservedele fra danske
            personbiler/varevogne, køb og salg af biler/varevogne samt transport af gods/biler.
            Størstedelen af vores salg ligger i Danmark, men vi har også en del eksport til
            udlandet, fortrinsvis Afrika. Hos AG-AUTO ApS hjælper vi dig med rådgivning og alt
            papirarbejde uanset om du ønsker at skrotte en bil eller transportere bil/gods/stykgods.
          </Paragraph2>
          <Paragraph2>
            Vi har også dygtige mekaniker, som kan hjælpe dig med at reparere din bil! Kom forbi med
            bilen, så laver vi en diagnose og giver dig et uforpligtende tilbud.
          </Paragraph2>
          <StyledHr />
          <StyleAjerDiv>
            <EjerDiv>
              <BossDiv />
              <p style={{ fontSize: '14px', textAlign: 'center', color: '#ffe900' }}>EJER</p>

              <p style={{ fontSize: '20px', textAlign: 'center', color: '#ffe900' }}>
                Alex Ghazali
              </p>
            </EjerDiv>
            <StedForDiv>
              <BossDiv />
              <p style={{ fontSize: '14px', textAlign: 'center', color: '#ffe900' }}>
                STEDFORTRÆDER
              </p>
              <p style={{ fontSize: '20px', textAlign: 'center', color: '#ffe900' }}>
                Fouad Ghazali
              </p>
            </StedForDiv>
          </StyleAjerDiv>
        </StyledSection2>
        <StyledKontaktSection style={{ color: '#ffe900' }}>
          <StylesParagraph style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2rem' }}>
            KONTAKT
          </StylesParagraph>
          <StylesParagraph style={{ textAlign: 'justify' }}>
            Har du spørgsmål eller andet, så er du meget velkommen til at kontakte os Vi vil
            kontakte dig hurtigst muligt Drejer det sig om bil til salg/skrot , venligst send alt
            info om bilen Drejer det sig om transport af gods eller bil kontakt venligst Arne Hansen
            på <a href='mailto:arne@ahshipping.dk'>mail</a>
          </StylesParagraph>
          <div style={{ margin: '25px 0px', textAlign: 'center' }}>
            <StylesParagraph>Adresse: Prøvestensbroen 5 2300 København S </StylesParagraph>
            <StyledSpan>
              <StylesParagraphKontakt>
                <StyledImage secondary src={telefon} />
                +45 40623660
              </StylesParagraphKontakt>
              <StylesParagraphKontakt>
                <StyledImage secondary src={mobil} />
                +45 21930777
              </StylesParagraphKontakt>
              <StylesParagraphKontakt>
                <StyledImage secondary src={fax} />
                +45 36308485
              </StylesParagraphKontakt>
              <StylesParagraphKontakt>
                <StyledImage secondary src={email} style={{ marginRight: '0px' }} />
                info@ag-auto.dk
              </StylesParagraphKontakt>
            </StyledSpan>
            <StylesParagraph>Åbningstider:</StylesParagraph>
            <StylesParagraph> </StylesParagraph>
            <StylesParagraph>Mandag til fredag: 10:00 til 19:00</StylesParagraph>
            <StylesParagraph> Lørdag: 12:00 til 16:00</StylesParagraph>
            <StylesParagraph> Søndag: Lukket </StylesParagraph>
          </div>
          <Iframediv>
            <iframe
              className='mapa'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.0489287983246!2d12.625644916043925!3d55.67074930578469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653acceca17fa7d%3A0x2ff9581c083a5de1!2sPr%C3%B8vestensbroen%205%2C%202300%20K%C3%B8benhavn!5e0!3m2!1spl!2sdk!4v1624352536728!5m2!1spl!2sdk'
              width='90%'
              height='90%'
              frameBorder='1'
              style={{ border: 0 }}
              allowFullScreen=''
              aria-hidden='false'
              tabIndex='0'
            />
          </Iframediv>
        </StyledKontaktSection>
      </StyledWrapper2>
    </GridTemplate>
  );
};

export default Omos;
