import React from 'react';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import MyGalleryGod from 'components/molecules/MyGalleryGod';
import MyGalleryEksport from 'components/molecules/MyGalleryEksport';
import way from '../assets/img/pik3.jpg';
import img2 from '../assets/img/gods/2.jpg';
import img3 from '../assets/img/transport/2a.jpg';

const StyledWrapper = styled.div`
  position: relative;
  background-image: url(${way});
  background-color: #989898;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 10%;
  padding-top: 50px;
  margin-top: 110px;
  z-index: 1;
`;
const StyledWrapper2 = styled.div`
  position: relative;
  background-color: #989898;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 5%;
  padding-top: 40px;
  z-index: 1;
`;
const StyledWrapper3 = styled.div`
  position: relative;
  background-color: #989898;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 5%;
  padding-top: 20px;
  z-index: 1;
`;
const StyledH2 = styled.h3`
  position: relative;
  text-align: center;
  color: white;
`;
const SytledContenerDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border: 1px solid black;
  padding: 20px 5px;
  border-radius: 4px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.7);
`;
const StyledA = styled.a`
  color: yellowgreen;
`;
const StyledDivImage = styled.div`
  width: 100%;
  height: 80%;
  text-align: center;
  @media (min-width: 741px) {
    display: none;
  }
`;
const Eksport = () => {
  return (
    <GridTemplate pageType='note'>
      <StyledWrapper>
        <StyledH2>EXPORT AF GODS OG BILER</StyledH2>
        <Paragraph style={{ marginBottom: '200px' }}>
          Vi eksporterer til hele verden. Ring og lad os få en snak om dine behov og vare som du
          skal have eksporteret. Få et uforpligtende tilbud.
        </Paragraph>
      </StyledWrapper>
      <StyledWrapper2>
        <SytledContenerDiv>
          <StyledDivImage>
            <img
              src={img2}
              style={{
                width: '80%',
                height: '100%',
              }}
            ></img>
          </StyledDivImage>
          <MyGalleryGod />
          <div
            style={{
              width: '450px',
              paddingLeft: '10px',
            }}
          >
            <StyledH2 style={{ marginTop: '0px' }}>EKSPORT AF GODS</StyledH2>
            <Paragraph>
              Vi har mange års erfaring med eksport af alle slags vare for vores kunder. Vi sørger
              for papirarbejdet, pakning og omlastning. Du kan også selv pakke kontaineren. Vi
              hjælper med rådgivning.
            </Paragraph>
            <Paragraph>
              Vi transporterer specielle vare f.eks. landbrugstransport og både.
            </Paragraph>
            <Paragraph>
              Vi transporterer også stykgods. Paller leveres stykvis. Alle transporter udføres i
              henhold til{' '}
              <StyledA href='https://www.retsinformation.dk/eli/lta/2015/1122' target='_blank'>
                CMR-loven.
              </StyledA>
            </Paragraph>
          </div>
        </SytledContenerDiv>
      </StyledWrapper2>
      <StyledWrapper3>
        <SytledContenerDiv>
          <div
            style={{
              width: '450px',
              paddingLeft: '10px',
            }}
          >
            <StyledH2 style={{ marginTop: '0px' }}>EKSPORT AF BILER</StyledH2>
            <Paragraph>Transportere din bil nemt og billigt!</Paragraph>
            <Paragraph>
              Vi har flere års erfaring med transport af biler. Vi distribuerer primært til Afrika,
              men kan også hjælpe med transport til Asien mv.
            </Paragraph>
            <Paragraph>Vi afhenter biler fra hele sjælland.</Paragraph>
          </div>
          <MyGalleryEksport />
          <StyledDivImage>
            <img
              src={img3}
              style={{
                width: '80%',
                height: '100%',
              }}
            ></img>
          </StyledDivImage>
        </SytledContenerDiv>
      </StyledWrapper3>
    </GridTemplate>
  );
};
export default Eksport;
